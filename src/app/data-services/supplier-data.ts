import { Injectable } from '@angular/core';
import {ISupplierInformation} from '../model';
@Injectable()
export class DataService{
    getSupplierInformation=():ISupplierInformation[]=>{
        let suppliers:ISupplierInformation[]=[];
        suppliers.push({
            id:0,
            name:"Sanotsh Kumar Pramod Kumar",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "09CFGPG2002D1Z5",
            contacts:[6386424678, 7376798235],
            mandiCode:199,
            mandiLicense:11244533,
            stateCode:9,
            bankDetail:{
                name:"Axis Bank",
                accountNo:920020058674508,
                branch:"Rath",
                ifsc:"UTIB0002798"
            }
        });
        suppliers.push({
            id:1,
            name:"Sundarlal Gupta & Sons",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "09BZIPG6911L1Z0",
            contacts:[],
            mandiCode:199,
            mandiLicense:45597735,
            stateCode:9,
            bankDetail:{
                name:"State Bank of India",
                accountNo:41179842041,
                branch:"SME RATH",
                ifsc:"SBIN0063728"
            }
        });
        suppliers.push({
            id:2,
            name:"Maneesh Enterprises",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "09AINPG1549D1ZB",
            contacts:[9005764508,9457064885],
            mandiCode:199,
            mandiLicense:97053669,
            stateCode:9,
            bankDetail:{
                name:"Axis Bank",
                accountNo:922020030082626,
                branch:"Rath",
                ifsc:"UTIB0002798"
            }
        });
        suppliers.push({
            id:3,
            name:"Parihar Traders",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "09JFQPS8199J1ZX",
            contacts:[7380617771,9580917210],
            mandiCode:199,
            mandiLicense:19468959,
            stateCode:9,
            bankDetail:{
                name:"State Bank of India",
                accountNo:41750584382,
                branch:"ADB RATH",
                ifsc:"SBIN0001987"
            }
        });
        suppliers.push({
            id:4,
            name:"Sarman Singh Group",
            address:"Naveen Galla Mandi Sthal Rath",
            GSTIN: "09BCIPR8885F1ZS",
            contacts:[8127520298],
            mandiCode:199,
            mandiLicense:55205688,
            stateCode:9,
            bankDetail:{
                name:"State Bank of India",
                accountNo:36753417862,
                branch:"RATH",
                ifsc:"SBIN0000206"
            }
        });
        return suppliers;
    }
}