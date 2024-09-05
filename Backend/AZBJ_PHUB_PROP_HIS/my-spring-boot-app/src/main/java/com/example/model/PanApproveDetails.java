package com.example.model;

import java.time.LocalDate;
import java.time.LocalTime;

public class PanApproveDetails {
    private String approvalId;
    private String approvalName;
    private LocalDate approvalDate;
    private LocalTime approvalTime;
    private String approvalDecision;

    // Getters and Setters
    public String getApprovalId() {
        return approvalId;
    }

    public void setApprovalId(String approvalId) {
        this.approvalId = approvalId;
    }

    public String getApprovalName() {
        return approvalName;
    }

    public void setApprovalName(String approvalName) {
        this.approvalName = approvalName;
    }

    public LocalDate getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(LocalDate approvalDate) {
        this.approvalDate = approvalDate;
    }

    public LocalTime getApprovalTime() {
        return approvalTime;
    }

    public void setApprovalTime(LocalTime approvalTime) {
        this.approvalTime = approvalTime;
    }

    public String getApprovalDecision() {
        return approvalDecision;
    }

    public void setApprovalDecision(String approvalDecision) {
        this.approvalDecision = approvalDecision;
    }
}
