package com.example.service;

import com.example.dao.PanApproveDetailsDao;
import com.example.model.PanApproveDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PanApproveDetailsService {

    private final PanApproveDetailsDao panApproveDetailsDao;

    @Autowired
    public PanApproveDetailsService(PanApproveDetailsDao panApproveDetailsDao) {
        this.panApproveDetailsDao = panApproveDetailsDao;
    }

    public List<PanApproveDetails> fetchPanApprovalDetails() {
        return panApproveDetailsDao.getPanApprovalDetails();
    }
}
