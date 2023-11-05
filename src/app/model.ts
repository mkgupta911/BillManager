export interface ISupplierInformation{
    id:number;
    name?:string;
    address?:string;
    stateCode?:number;
    GSTIN?:string;
    contacts?:number[];
    mandiLicense?:number;
    mandiCode?:number;
    bankDetail?:{
      name?:string;
      accountNo?:number;
      ifsc?:string;
      branch?:string;
    }
  }

  export class Buyer{
    name?:string;
    address?:string;
    stateCode?:number;
    GSTIN?:string;
    isLocal?:boolean =false;
  }

  export class Detail{
    srNo:number =0;
    date:Date = new Date();
    niner:string="9-2";
    is9R2:boolean = false;
    ninerno:string=""
    gatepass:string="";
    rrno:number=0;
    transporterName:string="";
    vehicleNumber:string='';
    insurance:string="";
    dueFreight:number=0;
    totalFreight:number=0;
    items:Item[]=[];
    agent:string="";
  }

  export class Item{
    name?:string;
    bags?:number;
    hsn?:string;
    packing?:number;
    weight?:number=0;
    rate?:number=0;
    roundOff?:number;
  }
   
  export enum HSNS{
    Matar='0713',
    Chana = '0713',
    Masoor = '0713',
    Gehu = '1001',
    Jau = '1003',
    Moong = '0713',
    Dhan = '1006'
  }
  export enum BillType{
    BillOfSupply,
    Invoice
  }
  export enum GSTStateCode{
    
  
    "Jammu & Kashmir" = 1,
    "Himachal Pradesh" = 2,
    "Punjab" = 3,
    "Chandigarh" = 4,
    "Uttarakhand" = 5,
    "Haryana" = 6,
    "Delhi" = 7,
    "Rajasthan" = 8,
    "Uttar Pradesh" = 9,
    "Bihar" = 10,
    "Sikkim" = 11,
    "Arunachal Pradesh" = 12,
    "Nagaland" = 13,
    "Manipur" = 14,
    "Mizoram" = 15,
    "Tripura" = 16,
    "Meghalaya" = 17,
    "Assam" = 18,
    "West Bengal" = 19,
    "Jharkhand" = 20,
    "Orissa" = 21,
    "Chhattisgarh" = 22,
    "Madhya Pradesh" = 23,
    "Gujarat" = 24,
    "Daman & Diu" = 25,
    "Dadra & Nagar Haveli" = 26,
    "Maharashtra" = 27,
    "Andhra Pradesh (Old)" = 28,
    "Karnataka" = 29,
    "Goa" = 30,
    "Lakshadweep" = 31,
    "Kerala" = 32,
    "Tamil Nadu" = 33,
    "Puducherry" = 34,
    "Andaman & Nicobar Islands" = 35,
    "Telengana" = 36    
  }
  export enum CopyType{
    Original,
    Duplicate,
    Office
  }
 