export interface SimpleInterestInput{
    principalAmount:number;
    period:number;
    accumulatedAmount:number;
    interestRate:number;
    interestEarned:number;
}
export interface CompoundInterestInput{
    CI_principalAmount:number;
    CI_period:number;
    CI_accumulatedAmount:number;
    CI_interestRate:number;
    CI_interestEarned:number;
    compoundPeriod:number;
    effectiveRate : number;
}