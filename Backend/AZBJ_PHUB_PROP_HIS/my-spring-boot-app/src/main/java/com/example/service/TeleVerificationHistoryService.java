package com.example.service;

import com.example.dao.TeleVerificationHistoryDao;
import com.example.model.TeleVerificationHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TeleVerificationHistoryService {

    private final TeleVerificationHistoryDao teleVerificationHistoryDao;

    @Autowired
    public TeleVerificationHistoryService(TeleVerificationHistoryDao teleVerificationHistoryDao) {
        this.teleVerificationHistoryDao = teleVerificationHistoryDao;
    }

    public List<TeleVerificationHistory> getCallHistory() {
        try {
            return teleVerificationHistoryDao.getCallHistory();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching call history", e);
        }
    }
}
