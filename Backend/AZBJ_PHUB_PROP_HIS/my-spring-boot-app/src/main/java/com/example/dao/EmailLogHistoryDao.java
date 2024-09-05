package com.example.dao;

import com.example.model.EmailLogHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class EmailLogHistoryDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String SELECT_EMAIL_LOG_HISTORY = "SELECT email_id, email_status, date_of_email_sent, registered_email_id, policy_bond_or_eia_letter, no_of_success_mails FROM email_log_history";
    private static final String UPDATE_EMAIL_STATUS = "UPDATE email_log_history SET email_status = ? WHERE email_id = ?";

    public List<EmailLogHistory> getEmailLogHistory() {
        return jdbcTemplate.query(SELECT_EMAIL_LOG_HISTORY, new EmailLogHistoryRowMapper());
    }

    public void updateEmailStatus(String emailId, String newStatus) {
        jdbcTemplate.update(UPDATE_EMAIL_STATUS, newStatus, emailId);
    }

    private static class EmailLogHistoryRowMapper implements RowMapper<EmailLogHistory> {
        @Override
        public EmailLogHistory mapRow(ResultSet rs, int rowNum) throws SQLException {
            EmailLogHistory emailLogHistory = new EmailLogHistory();
            emailLogHistory.setEmailId(rs.getString("email_id"));
            emailLogHistory.setEmailStatus(rs.getString("email_status"));
            emailLogHistory.setDateOfEmailSent(rs.getTimestamp("date_of_email_sent"));
            emailLogHistory.setRegisteredEmailId(rs.getString("registered_email_id"));
            emailLogHistory.setPolicyBondOrEiaLetter(rs.getString("policy_bond_or_eia_letter"));
            emailLogHistory.setNoOfSuccessMails(rs.getInt("no_of_success_mails"));
            return emailLogHistory;
        }
    }
}