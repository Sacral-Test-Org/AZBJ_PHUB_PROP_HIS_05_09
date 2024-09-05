import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cda',
  templateUrl: './cda.component.html',
  styleUrls: ['./cda.component.css']
})
export class CDAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setDeliveryDateFieldProperties();
    this.setDeliveryDatePromptProperties();
    this.setCDASectionProperties();
  }

  setDeliveryDateFieldProperties(): void {
    const deliveryDateField = document.getElementById('deliveryDateField');
    if (deliveryDateField) {
      deliveryDateField.style.textAlign = 'right';
      deliveryDateField.style.width = '84px';
      deliveryDateField.maxLength = 50;
      deliveryDateField.style.backgroundColor = 'white';
      deliveryDateField.style.color = 'black';
      deliveryDateField.style.position = 'absolute';
      deliveryDateField.style.left = '637px';
      deliveryDateField.style.top = '274px';
      deliveryDateField.style.fontFamily = 'Tahoma';
      deliveryDateField.style.fontSize = '8pt';
      deliveryDateField.style.fontWeight = '300';
      deliveryDateField.readOnly = true;
    }
  }

  setDeliveryDatePromptProperties(): void {
    const deliveryDatePrompt = document.getElementById('deliveryDatePrompt');
    if (deliveryDatePrompt) {
      deliveryDatePrompt.style.textAlign = 'left';
      deliveryDatePrompt.style.position = 'absolute';
      deliveryDatePrompt.style.left = '564px'; // 637 - 73
      deliveryDatePrompt.style.top = '252px'; // 274 - 22
      deliveryDatePrompt.style.fontFamily = 'Tahoma';
      deliveryDatePrompt.style.fontSize = '8pt';
      deliveryDatePrompt.style.fontWeight = 'bold';
    }
  }

  setCDASectionProperties(): void {
    const cdaSection = document.getElementById('cdaSection');
    if (cdaSection) {
      cdaSection.style.overflowY = 'scroll';
      cdaSection.style.height = '103px';
      cdaSection.style.width = '722px';
    }
    const scrollbar = document.getElementById('scrollbar');
    if (scrollbar) {
      scrollbar.style.width = '14px';
      scrollbar.style.position = 'absolute';
      scrollbar.style.left = '722px';
      scrollbar.style.top = '273px';
      scrollbar.style.height = '103px';
    }
  }
}
