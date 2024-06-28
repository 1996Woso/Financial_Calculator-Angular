import { Injectable } from "@angular/core";
import type { CompoundInterestInput, SimpleInterestInput } from "./app/financial-input.model";
@Injectable({providedIn:'root'})
export class FinancialService{
    calculateSimpleInterest(data:SimpleInterestInput){
       const{principalAmount,period,accumulatedAmount,interestRate,interestEarned} = data;
    }

    calculateCompoundInterest(data:CompoundInterestInput){
        const {CI_principalAmount,CI_period,CI_accumulatedAmount,CI_interestRate,CI_interestEarned,compoundPeriod,effectiveRate ,} = data;
    }
}