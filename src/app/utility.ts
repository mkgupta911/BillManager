export function padNumber(val:number,mask:string,place:number){
    return val.toString().padStart(place,mask);
}
export function numberToWord(value:number):string {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    
    if (value === 0) return ' Zero';
    
    let word = '';
    if (value >= 10000000) {
        word += numberToWord(Math.floor(value / 10000000)) + ' Crore ';
        value %= 10000000;
      }
    if (value >= 100000) {
      word += numberToWord(Math.floor(value / 100000)) + ' Lakh ';
      value %= 100000;
    }
    
    if (value >= 1000) {
      word += numberToWord(Math.floor(value / 1000)) + ' Thousand ';
      value %= 1000;
    }
    
    if (value >= 100) {
      word += ones[Math.floor(value / 100)] + ' Hundred ';
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
export function camelCase(word:string){
    var letter = word.substring(0,1);
    return word.replace(letter,letter.toUpperCase());
  }
export function convertToRupeesInWords(value:number){
    let intPart = Math.floor(value);
    var frPart = parseFloat(((value - intPart).toFixed(2)).split('.')[1]);
    // console.log(frPart);
    let _paisa ="";
    if(frPart!=0){
      _paisa = camelCase(numberToWord(frPart)) + "Paisa";
    }
    return `${camelCase(numberToWord(intPart))} Rupees ${_paisa} Only`;
  }
export function enumVal(obj:any,key:string){
  const keyIndex = Object.keys(obj).indexOf(key)
  return Object.values(obj)[keyIndex];
}
