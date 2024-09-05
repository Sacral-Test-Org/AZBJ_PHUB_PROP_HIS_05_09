package com.example.service;

import com.example.dao.CdaDao;
import com.example.model.Cda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CdaService {

    private final CdaDao cdaDao;

    @Autowired
    public CdaService(CdaDao cdaDao) {
        this.cdaDao = cdaDao;
    }

    public List<Cda> getCdaDetails() {
        return cdaDao.fetchCdaDetails();
    }
}
