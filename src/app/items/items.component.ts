import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numberToWord(value:number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    if (value === 0) return 'zero';
    
    let word = '';

    if (value >= 100000) {
      word += this.numberToWord(Math.floor(value / 100000)) + ' lakh ';
      value %= 100000;
    }
    
    if (value >= 1000) {
      word += this.numberToWord(Math.floor(value / 1000)) + ' thousand ';
      value %= 1000;
    }
    
    if (value >= 100) {
      word += ones[Math.floor(value / 100)] + ' hundred ';
      value %= 100;
    }
    
    if (value >= 11 && value <= 19) {
      word += teens[value - 11] + ' ';
      value = 0;
    }
    
    if (value >= 10) {
      word += tens[Math.floor(value / 10)] + ' ';
      value %= 10;
    }
    
    if (value > 0) {
      word += ones[value] + ' ';
    }
    
    return word;
  }
  camelCase(word:string){
    var letter = word.substring(0,1);
    return word.replace(letter,letter.toUpperCase());
  }
  convertToRupeesInWords(value:number){
    let intPart = Math.floor(value);
    var frPart = parseFloat(((value - intPart).toFixed(2)).split('.')[1]);
    console.log(frPart);
    let _paisa ="";
    if(frPart!=0){
      _paisa = this.camelCase(this.numberToWord(frPart)) + "Paisa";
    }
    return `${this.camelCase(this.numberToWord(intPart))} Rupees ${_paisa} Only`;
  }
}
