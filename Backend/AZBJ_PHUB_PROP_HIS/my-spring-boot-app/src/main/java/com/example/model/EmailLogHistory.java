package com.example.model;

public class EmailLogHistory {
    private String emailStatus;
    private String dateOfEmailSent;
    private String registeredEmailId;
    private String policyBondOrEiaLetter;
    private int noOfSuccessMails;

    // Getter and Setter for emailStatus
    public String getEmailStatus() {
        return emailStatus;
    }

    public void setEmailStatus(String emailStatus) {
        this.emailStatus = emailStatus;
    }

    // Getter and Setter for dateOfEmailSent
    public String getDateOfEmailSent() {
        return dateOfEmailSent;
    }

    public void setDateOfEmailSent(String dateOfEmailSent) {
        this.dateOfEmailSent = dateOfEmailSent;
    }

    // Getter and Setter for registeredEmailId
    public String getRegisteredEmailId() {
        return registeredEmailId;
    }

    public void setRegisteredEmailId(String registeredEmailId) {
        this.registeredEmailId = registeredEmailId;
    }

    // Getter and Setter for policyBondOrEiaLetter
    public String getPolicyBondOrEiaLetter() {
        return policyBondOrEiaLetter;
    }

    public void setPolicyBondOrEiaLetter(String policyBondOrEiaLetter) {
        this.policyBondOrEiaLetter = policyBondOrEiaLetter;
    }

    // Getter and Setter for noOfSuccessMails
    public int getNoOfSuccessMails() {
        return noOfSuccessMails;
    }

    public void setNoOfSuccessMails(int noOfSuccessMails) {
        this.noOfSuccessMails = noOfSuccessMails;
    }
}