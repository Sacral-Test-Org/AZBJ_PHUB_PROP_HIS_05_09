package com.example.controller;

import com.example.service.CdaService;
import com.example.model.Cda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cda")
public class CdaController {

    @Autowired
    private CdaService cdaService;

    @GetMapping("/details")
    public List<Cda> getCdaDetails() {
        return cdaService.getCdaDetails();
    }

    @GetMapping("/delivery-date-field-properties")
    public Map<String, Object> getDeliveryDateFieldProperties() {
        Map<String, Object> properties = new HashMap<>();
        properties.put("alignment", "right");
        properties.put("width", 84);
        properties.put("maxLength", 50);
        properties.put("backgroundColor", "white");
        properties.put("textColor", "black");
        properties.put("position", new int[]{637, 274});
        properties.put("font", "Tahoma");
        properties.put("fontSize", 8);
        properties.put("fontStyle", "plain");
        properties.put("fontWeight", "demilight");
        properties.put("promptAlignment", "left");
        properties.put("promptOffset", -73);
        properties.put("promptPositionOffset", -22);
        properties.put("promptFont", "Tahoma");
        properties.put("promptFontSize", 8);
        properties.put("promptFontStyle", "plain");
        properties.put("promptFontWeight", "bold");
        properties.put("editable", false);
        properties.put("insertable", false);
        properties.put("section", "CAN_HUB_DETAILS");
        properties.put("maxRecords", 6);
        properties.put("scrollbarWidth", 14);
        properties.put("scrollbarPosition", new int[]{722, 273});
        properties.put("scrollbarLength", 103);
        return properties;
    }
}