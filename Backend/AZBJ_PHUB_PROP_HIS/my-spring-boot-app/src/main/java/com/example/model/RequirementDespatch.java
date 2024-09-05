package com.example.model;

public class RequirementDespatch {
    private String reqType;
    private String reqDesc;
    private String raiseDate;

    // Constructor
    public RequirementDespatch(String reqType, String reqDesc, String raiseDate) {
        this.reqType = reqType;
        this.reqDesc = reqDesc;
        this.raiseDate = raiseDate;
    }

    // Getters
    public String getReqType() {
        return reqType;
    }

    public String getReqDesc() {
        return reqDesc;
    }

    public String getRaiseDate() {
        return raiseDate;
    }

    // Setters
    public void setReqType(String reqType) {
        this.reqType = reqType;
    }

    public void setReqDesc(String reqDesc) {
        this.reqDesc = reqDesc;
    }

    public void setRaiseDate(String raiseDate) {
        this.raiseDate = raiseDate;
    }
}
