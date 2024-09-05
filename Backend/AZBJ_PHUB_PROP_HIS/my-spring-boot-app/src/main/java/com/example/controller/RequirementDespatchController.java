package com.example.controller;

import com.example.model.RequirementDespatch;
import com.example.service.RequirementDespatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/requirements")
public class RequirementDespatchController {

    @Autowired
    private RequirementDespatchService requirementDespatchService;

    @GetMapping("/despatch")
    public List<RequirementDespatch> getRequirements() {
        return requirementDespatchService.fetchRequirements();
    }
}
