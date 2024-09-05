package com.example.dao;

import com.example.model.PanApproveDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PanApproveDetailsDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final class PanApproveDetailsMapper implements RowMapper<PanApproveDetails> {
        @Override
        public PanApproveDetails mapRow(ResultSet rs, int rowNum) throws SQLException {
            PanApproveDetails panApproveDetails = new PanApproveDetails();
            panApproveDetails.setApprovalId(rs.getString("approval_id"));
            panApproveDetails.setApprovalName(rs.getString("approval_name"));
            panApproveDetails.setApprovalDate(rs.getDate("approval_date"));
            panApproveDetails.setApprovalTime(rs.getTime("approval_time"));
            panApproveDetails.setApprovalDecision(rs.getString("approval_decision"));
            return panApproveDetails;
        }
    }

    public List<PanApproveDetails> getPanApprovalDetails() {
        String sql = "SELECT approval_id, approval_name, approval_date, approval_time, approval_decision FROM BLK_PAN_APPROVE_DET";
        return jdbcTemplate.query(sql, new PanApproveDetailsMapper());
    }
}
