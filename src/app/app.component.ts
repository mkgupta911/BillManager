import { Component } from '@angular/core';
import { Buyer, Detail, ISupplierInformation,Item , HSNS } from './model';
import { DataService } from './data-services/supplier-data';
import * as bill from "./utility";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private data:DataService;
  public _id:number=0;
  
  public suppliers:ISupplierInformation[];
  public buyer:Buyer = new Buyer();
  public billDetail:Detail = new Detail();
  
  public HSNS = HSNS;
  public util = bill;
  public supplier:ISupplierInformation;
  constructor(private _data:DataService){
    this.data=_data;
    this.suppliers = _data.getSupplierInformation();
    this.billDetail.items.push(new Item());
    this.billDetail.items.push(new Item());
    this.billDetail.items.push(new Item());
  }
  public _viewReport?:boolean=false;
  public _click?:boolean;
  logReport(){
    this.supplier= this.suppliers[this._id];
    this._viewReport =true;
    this._click = true;
  }
  print(){
    window.print();
  }
  
}
