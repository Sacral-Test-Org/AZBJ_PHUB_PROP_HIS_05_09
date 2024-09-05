package com.example.controller;

import com.example.service.PanApproveDetailsService;
import com.example.model.PanApprovalDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/pan-approvals")
public class PanApproveDetailsController {

    @Autowired
    private PanApproveDetailsService panApproveDetailsService;

    @GetMapping("/details")
    public ResponseEntity<List<PanApprovalDetail>> getPanApprovalDetails() {
        List<PanApprovalDetail> panApprovalDetails = panApproveDetailsService.fetchPanApprovalDetails();
        return ResponseEntity.ok(panApprovalDetails);
    }
}
