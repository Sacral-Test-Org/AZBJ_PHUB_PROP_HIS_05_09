package com.example.model;

public class Cda {
    private String deliveryDate;
    // Other fields representing the CDA data model
    private String otherFields;

    // Constructor
    public Cda(String deliveryDate, String otherFields) {
        this.deliveryDate = deliveryDate;
        this.otherFields = otherFields;
    }

    // Getters and Setters
    public String getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getOtherFields() {
        return otherFields;
    }

    public void setOtherFields(String otherFields) {
        this.otherFields = otherFields;
    }
}
