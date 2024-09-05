package com.example.controller;

import com.example.model.EmailLogHistory;
import com.example.service.EmailLogHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmailLogHistoryController {

    @Autowired
    private EmailLogHistoryService emailLogHistoryService;

    @GetMapping("/email-log-history")
    public ResponseEntity<List<EmailLogHistory>> getEmailLogHistory() {
        List<EmailLogHistory> emailLogHistoryList = emailLogHistoryService.fetchEmailLogHistory();
        return ResponseEntity.ok(emailLogHistoryList);
    }

    @PutMapping("/update-email-status")
    public ResponseEntity<Void> updateEmailStatus(@RequestParam String emailId, @RequestParam String newStatus) {
        emailLogHistoryService.updateEmailStatus(emailId, newStatus);
        return ResponseEntity.ok().build();
    }
}
