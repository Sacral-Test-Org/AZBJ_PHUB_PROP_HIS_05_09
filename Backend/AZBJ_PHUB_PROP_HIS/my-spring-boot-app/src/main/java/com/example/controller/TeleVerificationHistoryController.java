package com.example.controller;

import com.example.service.TeleVerificationHistoryService;
import com.example.model.Control;
import com.example.model.TeleVerificationHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tele-verification-history")
public class TeleVerificationHistoryController {

    private final TeleVerificationHistoryService teleVerificationHistoryService;

    @Autowired
    public TeleVerificationHistoryController(TeleVerificationHistoryService teleVerificationHistoryService) {
        this.teleVerificationHistoryService = teleVerificationHistoryService;
    }

    @GetMapping
    public ResponseEntity<?> getTeleVerificationHistory(@RequestBody Control control) {
        try {
            List<TeleVerificationHistory> historyList = teleVerificationHistoryService.getCallHistory();
            return ResponseEntity.ok(historyList);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred while fetching tele verification history.");
        }
    }
}