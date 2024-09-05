package com.example.service;

import com.example.dao.EmailLogHistoryDao;
import com.example.model.EmailLogHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailLogHistoryService {

    @Autowired
    private EmailLogHistoryDao emailLogHistoryDao;

    public List<EmailLogHistory> fetchEmailLogHistory() {
        return emailLogHistoryDao.getEmailLogHistory();
    }

    public void updateEmailStatus(String emailId, String newStatus) {
        emailLogHistoryDao.updateEmailStatus(emailId, newStatus);
    }
}
