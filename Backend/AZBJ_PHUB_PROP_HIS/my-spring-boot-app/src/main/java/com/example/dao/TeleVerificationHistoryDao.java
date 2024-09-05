package com.example.dao;

import com.example.model.TeleVerificationHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class TeleVerificationHistoryDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String FETCH_TELE_VERIFICATION_HISTORY = "SELECT request_no, main_status, sub_status, approval_remarks, caller_id, call_time " +
            "FROM tele_verification_history " +
            "ORDER BY call_time DESC";

    public List<TeleVerificationHistory> getCallHistory() {
        return jdbcTemplate.query(FETCH_TELE_VERIFICATION_HISTORY, new TeleVerificationHistoryRowMapper());
    }

    private static class TeleVerificationHistoryRowMapper implements RowMapper<TeleVerificationHistory> {
        @Override
        public TeleVerificationHistory mapRow(ResultSet rs, int rowNum) throws SQLException {
            TeleVerificationHistory history = new TeleVerificationHistory();
            history.setRequestNo(rs.getInt("request_no"));
            history.setMainStatus(rs.getString("main_status"));
            history.setSubStatus(rs.getString("sub_status"));
            history.setApprovalRemarks(rs.getString("approval_remarks"));
            history.setCallerId(rs.getString("caller_id"));
            history.setCallTime(rs.getObject("call_time", LocalDateTime.class));
            return history;
        }
    }
}
