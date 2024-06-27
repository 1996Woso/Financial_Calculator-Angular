import { Injectable } from "@angular/core";
import type { SimpleInterestInput } from "./app/financial-input.model";
@Injectable({providedIn:'root'})
export class FinancialService{
    period?:number;
    amount?:number;
    principal?:number;
    rate?:number;
    interest?:number;
    calculateFinancialResults(data:SimpleInterestInput){
       const{principalAmount,period,accumulatedAmount,interestRate,interestEarned} = data;
    //    this.amount = principalAmount*(1+(interestRate/100)*period);
    //    this.principal = accumulatedAmount/(1+(interestRate/100)*period);
    //    this.period = ((accumulatedAmount/principalAmount)-1)/(interestRate/100);
    //    this.rate = 100*((accumulatedAmount/principalAmount)-1)/period;
    //    this.interest = principalAmount*interestRate*period/100;
    }
}