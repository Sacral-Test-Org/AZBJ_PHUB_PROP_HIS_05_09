package com.example.dao;

import com.example.model.Cda;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CdaDao {

    private final JdbcTemplate jdbcTemplate;

    public CdaDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Cda> fetchCdaDetails() {
        String sql = "SELECT delivery_date, other_fields FROM cda_table";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Cda cda = new Cda();
            cda.setDeliveryDate(rs.getString("delivery_date"));
            // Set other fields here
            return cda;
        });
    }
}
