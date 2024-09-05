package com.example.controller;

import com.example.service.ControlService;
import com.example.model.ReceiptDetails;
import com.example.model.SearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ControlController {

    @Autowired
    private ControlService controlService;

    @GetMapping("/getReceiptDetails")
    public ResponseEntity<List<ReceiptDetails>> getReceiptDetails(@RequestBody SearchCriteria criteria) {
        List<ReceiptDetails> receiptDetails = controlService.getReceiptDetails(criteria);
        if (receiptDetails.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(receiptDetails, HttpStatus.OK);
        }
    }
}
