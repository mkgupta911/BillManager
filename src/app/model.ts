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
    ninerno:number=0;
    gatepass:number=0;
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
    Moong = '0713'
  }
  export enum BillType{
    BillOfSupply,
    Invoice
  }
  export enum GSTStateCode{
    "Uttar Pradesh"=9
  }
  export enum CopyType{
    Original,
    Duplicate,
    Office
  }
 