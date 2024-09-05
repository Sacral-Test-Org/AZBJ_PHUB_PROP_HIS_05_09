package com.example.dao;

import com.example.model.RequirementDespatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class RequirementDespatchDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String FETCH_REQUIREMENTS_QUERY = "SELECT REQ_TYPE, REQ_DESC, RAISE_DATE FROM REQUIREMENTS";

    public List<RequirementDespatch> getRequirements() {
        return jdbcTemplate.query(FETCH_REQUIREMENTS_QUERY, new RequirementDespatchRowMapper());
    }

    private static class RequirementDespatchRowMapper implements RowMapper<RequirementDespatch> {
        @Override
        public RequirementDespatch mapRow(ResultSet rs, int rowNum) throws SQLException {
            RequirementDespatch requirementDespatch = new RequirementDespatch();
            requirementDespatch.setReqType(rs.getString("REQ_TYPE"));
            requirementDespatch.setReqDesc(rs.getString("REQ_DESC"));
            requirementDespatch.setRaiseDate(rs.getDate("RAISE_DATE"));
            return requirementDespatch;
        }
    }
}
