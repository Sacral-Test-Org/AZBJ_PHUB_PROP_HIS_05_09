package com.example.dao;

import com.example.model.Control;
import com.example.model.TeleVerificationHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ControlDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String getPhysicalPolicyBond(String applicationNo) {
        String sql = "SELECT physical_policy_bond FROM azbj_annuity_prod_det WHERE appln_no = ? AND ROWNUM = '1' AND physical_policy_bond IS NOT NULL";
        return jdbcTemplate.queryForObject(sql, new Object[]{applicationNo}, String.class);
    }

    // Method to reset the form data in the database
    public void resetFormData(String formId) {
        String sql = "UPDATE form_data SET data = NULL WHERE form_id = ?";
        jdbcTemplate.update(sql, formId);
    }

    // Method to hide specific fields in the form data
    public void hideFields(String formId) {
        String sql = "UPDATE form_data SET visible = 'N' WHERE form_id = ? AND field_name IN (" +
                "'RECEIPT', 'Merged_by', 'merged_on', 'CP_MERGING', 'Merg_req_dt', 'STATUS', 'email_time', 'email_id', 'email_flag', " +
                "'success_mails', 'MERG_SUB_STATUS', 'CKYC_EDIT', 'EKYC_EDIT', 'MERG_APPROVER_ID', 'AUTO_BBU_FLAG', 'APPROVED_REASON', " +
                "'EIA_CASE', 'diff_state', 'AUTO_DE2_CASE', 'INFO_SHARE_LETTER', 'PHOD'" +
                ")";
        jdbcTemplate.update(sql, formId);
    }

    // Method to fetch tele verification history details
    public List<TeleVerificationHistory> getTeleVerificationHistory(Control control) {
        String sql = "SELECT request_no, modify_date, userid, main_status, sub_status, approval_remarks " +
                "FROM azbj_central_call_dtls " +
                "WHERE (proposal_no = ? OR application_no = ?) " +
                "ORDER BY modify_date DESC";

        return jdbcTemplate.query(sql, new Object[]{control.getPropNo(), control.getApplicationNo()}, new RowMapper<TeleVerificationHistory>() {
            @Override
            public TeleVerificationHistory mapRow(ResultSet rs, int rowNum) throws SQLException {
                TeleVerificationHistory history = new TeleVerificationHistory();
                history.setRequestNo(rs.getString("request_no"));
                history.setModifyDate(rs.getTimestamp("modify_date"));
                history.setUserId(rs.getString("userid"));
                history.setMainStatus(rs.getString("main_status"));
                history.setSubStatus(rs.getString("sub_status"));
                history.setApprovalRemarks(rs.getString("approval_remarks"));
                return history;
            }
        });
    }

    // Method to fetch reasons and comments
    public List<Control> getReasonComments(String applicationNumber) {
        String sql = "SELECT * FROM azbj_deqc_reason_comments WHERE APPLN_NO = ? ORDER BY comment_date";

        return jdbcTemplate.query(sql, new Object[]{applicationNumber}, new RowMapper<Control>() {
            @Override
            public Control mapRow(ResultSet rs, int rowNum) throws SQLException {
                Control control = new Control();
                control.setReason(rs.getString("reason"));
                control.setComments(rs.getString("comments"));
                control.setUserId(rs.getString("user_id"));
                control.setCommentDate(rs.getTimestamp("comment_date"));
                return control;
            }
        });
    }

    // Method to fetch remarks based on application number
    public List<String> getRemarks(String applicationNumber) {
        String sql = "SELECT remarks FROM azbj_bbu_qc_ques_answers WHERE application_no = ? AND answer <> stp_answer";
        return jdbcTemplate.query(sql, new Object[]{applicationNumber}, (rs, rowNum) -> rs.getString("remarks"));
    }

    // Method to fetch comments based on policy number
    public List<String> getComments(String policyNumber) {
        String sql = "SELECT comments FROM azbj_uw_comments WHERE policy_no = ? AND FLAG = 'N'";
        return jdbcTemplate.query(sql, new Object[]{policyNumber}, (rs, rowNum) -> rs.getString("comments"));
    }

    // Method to validate BI Number and retrieve Application Number
    public String findApplicationNumber(String biNumber) {
        String sql = "SELECT APPLN_NO FROM azbj_proposal_appln_det_ext WHERE BI_NO = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{biNumber}, String.class);
    }

    // Method to fetch email history records based on proposal number
    public List<Control> getEmailHistory(String proposalNumber) {
        String sql = "SELECT DECODE(table_data, '1', 'Policy Bond', '2', 'EIA Letter') table_data, " +
                "mail_flag, " +
                "updated_on " +
                "FROM (SELECT 1 table_data, " +
                "DECODE(mail_yn, 'Y', 'Sent Success', 'N', 'Sent Failure') mail_flag, " +
                "updated_on " +
                "FROM azbj_policy_copy_mailer " +
                "WHERE policy_ref = ? " +
                "UNION " +
                "SELECT 2 table_data, " +
                "DECODE(send_flag, 'Y', 'Sent Success', 'N', 'Sent Failure') mail_flag, " +
                "mail_send_time updated_on " +
                "FROM azbj_eia_letter_gen_dtls " +
                "WHERE policy_no = ?) " +
                "ORDER BY updated_on DESC";

        return jdbcTemplate.query(sql, new Object[]{proposalNumber, proposalNumber}, new RowMapper<Control>() {
            @Override
            public Control mapRow(ResultSet rs, int rowNum) throws SQLException {
                Control control = new Control();
                control.setTableData(rs.getString("table_data"));
                control.setMailFlag(rs.getString("mail_flag"));
                control.setUpdatedOn(rs.getTimestamp("updated_on"));
                return control;
            }
        });
    }

    // Method to fetch receipt details based on search criteria
    public List<Control> fetchReceiptDetails(SearchCriteria criteria) {
        String sql = "SELECT DISTINCT application_no, proposal_no, perm_receipt_no " +
                "FROM azbj_phub_tracker " +
                "WHERE (proposal_no = ? OR application_no = ? OR perm_receipt_no = ?)";

        return jdbcTemplate.query(sql, new Object[]{criteria.getProposalNumber(), criteria.getApplicationNumber(), criteria.getReceiptNumber()}, new RowMapper<Control>() {
            @Override
            public Control mapRow(ResultSet rs, int rowNum) throws SQLException {
                Control control = new Control();
                control.setApplicationNumber(rs.getString("application_no"));
                control.setProposalNumber(rs.getString("proposal_no"));
                control.setReceiptNumber(rs.getString("perm_receipt_no"));
                return control;
            }
        });
    }
}
