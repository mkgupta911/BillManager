import { Injectable } from '@angular/core';
import {BillInfo,Tile} from '../model';
@Injectable()
export class DataService{
    getSupplierInformation=()=>{
        let suppliers:BillInfo.ISupplierInformation[]=[];
        suppliers.push({
            loginid:"omprakash.gupta",
            password:"admin",
            name:"Sanotsh Kumar Pramod Kumar",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "09CFGPG2002D1Z5",
            contacts:[6386424678, 7376798235],
            mandiCode:199,
            mandiLicense:11244533,
            stateCode:09,
            bankDetail:{
                name:"Axis Bank",
                accountNo:920020058674508,
                branch:"Rath",
                ifsc:"UTIB0002798"
            }
        });
        suppliers.push({
            loginid:"sundarlal",
            password:"admin",
            name:"Sundarlal Gupta & Sons",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "",
            contacts:[],
            mandiCode:199,
            mandiLicense:11244533,
            stateCode:09,
            bankDetail:{
                name:"Axis Bank",
                accountNo:920020058674508,
                branch:"Rath",
                ifsc:"UTIB0002798"
            }
        })
    }
}