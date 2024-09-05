package com.example.model;

import java.util.Date;

public class Control {
    private String application_no;
    private String physical_policy_bond;
    private boolean receipt;
    private String merged_by;
    private String merged_on;
    private boolean cp_merging;
    private String merg_req_dt;
    private String status;
    private String email_time;
    private String email_id;
    private boolean email_flag;
    private String success_mails;
    private String merg_sub_status;
    private boolean ckyc_edit;
    private boolean ekyc_edit;
    private String merg_approver_id;
    private boolean auto_bbu_flag;
    private String approved_reason;
    private boolean eia_case;
    private boolean diff_state;
    private boolean auto_de2_case;
    private boolean info_share_letter;
    private String phod;

    // New fields for tele verification history details
    private String request_no;
    private Date modify_date;
    private String userid;
    private String main_status;
    private String sub_status;
    private String approval_remarks;

    // New fields for reasons and comments details
    private String reason;
    private String comments;
    private String userId;
    private Date commentDate;

    // New fields for BI Number and Application Number
    private String biNumber;
    private String applicationNumber;

    // New fields for email history details
    private String tableData;
    private String mailFlag;
    private Date updatedOn;

    // New fields for receipt details
    private String receiptNumber;
    private String proposalNumber;
    private String scrutinyNumber;

    // Getters and Setters
    public String getApplication_no() {
        return application_no;
    }

    public void setApplication_no(String application_no) {
        this.application_no = application_no;
    }

    public String getPhysical_policy_bond() {
        return physical_policy_bond;
    }

    public void setPhysical_policy_bond(String physical_policy_bond) {
        this.physical_policy_bond = physical_policy_bond;
    }

    public boolean isReceipt() {
        return receipt;
    }

    public void setReceipt(boolean receipt) {
        this.receipt = receipt;
    }

    public String getMerged_by() {
        return merged_by;
    }

    public void setMerged_by(String merged_by) {
        this.merged_by = merged_by;
    }

    public String getMerged_on() {
        return merged_on;
    }

    public void setMerged_on(String merged_on) {
        this.merged_on = merged_on;
    }

    public boolean isCp_merging() {
        return cp_merging;
    }

    public void setCp_merging(boolean cp_merging) {
        this.cp_merging = cp_merging;
    }

    public String getMerg_req_dt() {
        return merg_req_dt;
    }

    public void setMerg_req_dt(String merg_req_dt) {
        this.merg_req_dt = merg_req_dt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEmail_time() {
        return email_time;
    }

    public void setEmail_time(String email_time) {
        this.email_time = email_time;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public boolean isEmail_flag() {
        return email_flag;
    }

    public void setEmail_flag(boolean email_flag) {
        this.email_flag = email_flag;
    }

    public String getSuccess_mails() {
        return success_mails;
    }

    public void setSuccess_mails(String success_mails) {
        this.success_mails = success_mails;
    }

    public String getMerg_sub_status() {
        return merg_sub_status;
    }

    public void setMerg_sub_status(String merg_sub_status) {
        this.merg_sub_status = merg_sub_status;
    }

    public boolean isCkyc_edit() {
        return ckyc_edit;
    }

    public void setCkyc_edit(boolean ckyc_edit) {
        this.ckyc_edit = ckyc_edit;
    }

    public boolean isEkyc_edit() {
        return ekyc_edit;
    }

    public void setEkyc_edit(boolean ekyc_edit) {
        this.ekyc_edit = ekyc_edit;
    }

    public String getMerg_approver_id() {
        return merg_approver_id;
    }

    public void setMerg_approver_id(String merg_approver_id) {
        this.merg_approver_id = merg_approver_id;
    }

    public boolean isAuto_bbu_flag() {
        return auto_bbu_flag;
    }

    public void setAuto_bbu_flag(boolean auto_bbu_flag) {
        this.auto_bbu_flag = auto_bbu_flag;
    }

    public String getApproved_reason() {
        return approved_reason;
    }

    public void setApproved_reason(String approved_reason) {
        this.approved_reason = approved_reason;
    }

    public boolean isEia_case() {
        return eia_case;
    }

    public void setEia_case(boolean eia_case) {
        this.eia_case = eia_case;
    }

    public boolean isDiff_state() {
        return diff_state;
    }

    public void setDiff_state(boolean diff_state) {
        this.diff_state = diff_state;
    }

    public boolean isAuto_de2_case() {
        return auto_de2_case;
    }

    public void setAuto_de2_case(boolean auto_de2_case) {
        this.auto_de2_case = auto_de2_case;
    }

    public boolean isInfo_share_letter() {
        return info_share_letter;
    }

    public void setInfo_share_letter(boolean info_share_letter) {
        this.info_share_letter = info_share_letter;
    }

    public String getPhod() {
        return phod;
    }

    public void setPhod(String phod) {
        this.phod = phod;
    }

    // New Getters and Setters for tele verification history details
    public String getRequest_no() {
        return request_no;
    }

    public void setRequest_no(String request_no) {
        this.request_no = request_no;
    }

    public Date getModify_date() {
        return modify_date;
    }

    public void setModify_date(Date modify_date) {
        this.modify_date = modify_date;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getMain_status() {
        return main_status;
    }

    public void setMain_status(String main_status) {
        this.main_status = main_status;
    }

    public String getSub_status() {
        return sub_status;
    }

    public void setSub_status(String sub_status) {
        this.sub_status = sub_status;
    }

    public String getApproval_remarks() {
        return approval_remarks;
    }

    public void setApproval_remarks(String approval_remarks) {
        this.approval_remarks = approval_remarks;
    }

    // New Getters and Setters for reasons and comments details
    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Date getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
    }

    // New Getters and Setters for BI Number and Application Number
    public String getBiNumber() {
        return biNumber;
    }

    public void setBiNumber(String biNumber) {
        this.biNumber = biNumber;
    }

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    // New Getters and Setters for email history details
    public String getTableData() {
        return tableData;
    }

    public void setTableData(String tableData) {
        this.tableData = tableData;
    }

    public String getMailFlag() {
        return mailFlag;
    }

    public void setMailFlag(String mailFlag) {
        this.mailFlag = mailFlag;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }

    // New Getters and Setters for receipt details
    public String getReceiptNumber() {
        return receiptNumber;
    }

    public void setReceiptNumber(String receiptNumber) {
        this.receiptNumber = receiptNumber;
    }

    public String getProposalNumber() {
        return proposalNumber;
    }

    public void setProposalNumber(String proposalNumber) {
        this.proposalNumber = proposalNumber;
    }

    public String getScrutinyNumber() {
        return scrutinyNumber;
    }

    public void setScrutinyNumber(String scrutinyNumber) {
        this.scrutinyNumber = scrutinyNumber;
    }
}