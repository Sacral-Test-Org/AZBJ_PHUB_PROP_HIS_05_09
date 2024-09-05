package com.example.service;

import com.example.dao.ControlDao;
import com.example.dao.TeleVerificationHistoryDao;
import com.example.model.Control;
import com.example.model.TeleVerificationHistory;
import com.example.model.ReasonComment;
import com.example.model.Remark;
import com.example.model.Comment;
import com.example.model.EmailHistory;
import com.example.model.SearchCriteria;
import com.example.model.ReceiptDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.io.File;
import java.io.FileOutputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@Service
public class ControlService {

    @Autowired
    private ControlDao controlDao;

    @Autowired
    private TeleVerificationHistoryDao teleVerificationHistoryDao;

    public String getPhysicalPolicyBond(String applicationNo) {
        return controlDao.getPhysicalPolicyBond(applicationNo);
    }

    public void clearForm() {
        controlDao.hideFields();
        controlDao.navigateToReasonCommentsExit();
    }

    public List<TeleVerificationHistory> fetchTeleVerificationHistory(Control control) {
        try {
            return teleVerificationHistoryDao.getTeleVerificationHistory(control);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching tele verification history details", e);
        }
    }

    public List<ReasonComment> fetchReasonComments(String applicationNumber) {
        try {
            return controlDao.getReasonComments(applicationNumber);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching reasons and comments", e);
        }
    }

    public List<Remark> fetchRemarks(String applicationNumber) {
        try {
            return controlDao.getRemarks(applicationNumber);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching remarks", e);
        }
    }

    public List<Comment> fetchComments(String policyNumber) {
        try {
            return controlDao.getComments(policyNumber);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching comments", e);
        }
    }

    public byte[] generateExcelFile() {
        try {
            // Fetch data from AZBJ_PHUB_TRACKER section
            List<Control> trackerData = controlDao.getTrackerData();

            // Create a new Excel workbook and sheet
            Workbook workbook = new XSSFWorkbook();
            Sheet sheet = workbook.createSheet("AZBJ_PHUB_TRACKER");

            // Create header row
            Row headerRow = sheet.createRow(0);
            Cell headerCell1 = headerRow.createCell(0);
            headerCell1.setCellValue("Activity");
            Cell headerCell2 = headerRow.createCell(1);
            headerCell2.setCellValue("ActivityUser");
            Cell headerCell3 = headerRow.createCell(2);
            headerCell3.setCellValue("ActivityDate");

            // Populate data rows
            int rowNum = 1;
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
            for (Control record : trackerData) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(record.getStat());
                row.createCell(1).setCellValue(record.getUsr());
                row.createCell(2).setCellValue(dateFormat.format(record.getDt()));
            }

            // Generate file name based on current date and time
            String fileName = "c:\\" + new SimpleDateFormat("ddMMyyyyHHmmss").format(new Date()) + ".xlsx";
            FileOutputStream fileOut = new FileOutputStream(fileName);
            workbook.write(fileOut);
            fileOut.close();
            workbook.close();

            // Return the file path
            return fileName.getBytes();
        } catch (Exception e) {
            throw new RuntimeException("Error generating Excel file", e);
        }
    }

    public String getApplicationNumber(String biNumber) {
        try {
            return controlDao.findApplicationNumber(biNumber);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching application number", e);
        }
    }

    public List<EmailHistory> getEmailHistory(String proposalNumber) {
        try {
            return controlDao.getEmailHistory(proposalNumber);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching email history records", e);
        }
    }

    public List<ReceiptDetails> getReceiptDetails(SearchCriteria criteria) {
        try {
            return controlDao.fetchReceiptDetails(criteria);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching receipt details", e);
        }
    }
}
