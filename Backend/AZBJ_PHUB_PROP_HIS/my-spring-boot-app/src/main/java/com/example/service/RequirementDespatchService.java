package com.example.service;

import com.example.dao.RequirementDespatchDao;
import com.example.model.RequirementDespatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequirementDespatchService {

    @Autowired
    private RequirementDespatchDao requirementDespatchDao;

    public List<RequirementDespatch> fetchRequirements() {
        return requirementDespatchDao.getRequirements();
    }
}
