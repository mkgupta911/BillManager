import { NgIf } from "@angular/common";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

 export module BillInfo{
  export interface ISupplierInformation{
    loginid:string,
    password:string,
    name:string;
    address:string;
    stateCode:number;
    GSTIN:string;
    contacts:number[];
    mandiLicense:number;
    mandiCode:number;
    bankDetail:{
      name:string;
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
  }

  export class Detail{
    srNo:number =0;
    date:Date = new Date();
    niner:string="9-2";
    ninerno:number[]=[];
    gatepass:number[]=[];
    rrno:number=0;
    transporterName:string="";
    vehicleNumber:string='';
    insurance:string="";
    dueFreight:number=0;
    totalFreight:number=0;
    items:Item[]=[]
  }

  export interface Item{
    name:string;
    bags:number;
    hsn:string;
    packing:number;
    weight:number;
    rate:number;
    roundOff:number;
  }
   
  export enum HSNS{
    Matar='0713',
    Chana = '0713',
    Masoor = '0713',
    Gehu = '1001',
    Jau = '1003',
    Moong = '0713'
  }
  export enum BillType{
    BillOfSupply,
    Invoice
  }
  export enum GSTStateCode{
    "Uttar Pradesh"="09"
  }

  
 }