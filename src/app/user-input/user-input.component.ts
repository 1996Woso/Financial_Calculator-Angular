import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialService } from '../../financial.service';
import { UserOptionsComponent } from '../user-options/user-options.component';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule,NgIf,UserOptionsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input() interestType?: string;  // Input property to receive the selected interest type
  selectedInterestType = '';  // Local property to store the selected interest type

  onInterestTypeChanged(interestType: string){
    this.selectedInterestType = interestType;
  }

  //SIMPLE INTEREST
  //Simple Interest variables
  userPrincipal = '';
  userAmount = '';
  userRate = '';
  userInterest = '';
  userPeriod = '';
  constructor(private financialService:FinancialService){}
  onSubmitSimpleInterest(){
    this.financialService.calculateSimpleInterest({
      principalAmount: +this.userPrincipal,
      accumulatedAmount: +this.userAmount,
      interestEarned: +this.userInterest,
      period: +this.userPeriod,
      interestRate: +this.userRate
    });
  }
  calculatePrincipal() {
    const accumulatedAmount = +this.userAmount;
    const interestRate = +this.userRate;
    const period = +this.userPeriod;
    const interestEarned = +this.userInterest;

    if (accumulatedAmount && interestRate && period) {
      this.userPrincipal = (
        accumulatedAmount / (1 + (interestRate / 100) * period)
      ).toFixed(2);
    }
    else if(interestEarned&&interestRate&&period){
      this.userPrincipal = (100*(interestEarned/(interestRate*period))).toFixed(2);
    }
    else if(accumulatedAmount && interestEarned){
      this.userPrincipal = (accumulatedAmount-interestEarned).toFixed(2);
    } else {
      alert('Please enter values for Accumulated Amount, Interest Rate, and Period.');
    }
  }
  
  calculateAmaount(){
    const principal = +this.userPrincipal;
    const interestRate = +this.userRate;
    const period = +this.userPeriod;
    const interestEarned = +this.userInterest;
    if(principal&&interestRate&&period){
      this.userAmount = (principal*(1+(interestRate/100)*period)).toFixed(2);
    }
    else if(principal&&interestEarned){
      this.userAmount = (interestEarned+principal).toFixed(2);
    }else{
      alert('Please fill in required fields correctly.');
    }
  }

  calculatePeriod(){
    const principal = +this.userPrincipal;
    const interestRate = +this.userRate;
    const accumulatedAmount = +this.userAmount;
    const interestEarned = +this.userInterest;
    if(principal&&interestRate&&accumulatedAmount){
      this.userPeriod = (((accumulatedAmount/principal)-1)/(interestRate/100)).toFixed(2);
    }
    else if(interestEarned&&principal&&interestRate){
      this.userPeriod = (100*(interestEarned/(principal*interestRate))).toFixed(2);
    }else{
      alert('Please fill in required fields correctly.');
    }
  }

  calculateRate(){
    const principal = +this.userPrincipal;
    const period = +this.userPeriod;
    const accumulatedAmount = +this.userAmount;
    const interestEarned = +this.userInterest;
    if(principal&&period&&accumulatedAmount){
      this.userRate = (100*((accumulatedAmount/principal)-1)/period).toFixed(2);
    }
    else if(interestEarned&&principal&&period){
      this.userRate = (100*(interestEarned/(principal*period))).toFixed(2);
    }else{
      alert('Please fill in required fields correctly.');
    }
  }

  calculateInterest(){
    const principal = +this.userPrincipal;
    const period = +this.userPeriod;
    const accumulatedAmount = +this.userAmount;
    const interestRate = +this.userRate;
    if(principal&&interestRate&&period){
      this.userInterest = ((principal*period*interestRate)/100).toFixed(2);
    }
    else if(principal&& accumulatedAmount){
      this.userInterest = (accumulatedAmount-principal).toFixed(2);
    }else{
      alert('Please fill in required fields correctly.');
    }
  }
  //COMPOUND INTERES
  //Compound interest variables
  CI_userPrincipal = '';
  CI_userAmount = '';
  CI_userInterest = '';
  CI_userRate = '';
  CI_userEffecitveRate = '';
  CI_userPeriod = '';
  CI_userCompoundPeriod = '';

  onSubmitCompoundInterest(){
    this.financialService.calculateCompoundInterest({
      CI_principalAmount: +this.CI_userPrincipal,
      CI_accumulatedAmount: +this.CI_userAmount,
      CI_interestEarned: +this.CI_userInterest,
      CI_interestRate: +this.CI_userRate,
      effectiveRate: +this.CI_userEffecitveRate,
      CI_period: +this.CI_userPeriod,
      compoundPeriod: +this.CI_userCompoundPeriod
    });
  }

  calculate_CI_Amount(){
    const P = +this.CI_userPrincipal;
    const n = +this.CI_userPeriod;
    const I = +this.CI_userInterest;
    const m = +this.CI_userCompoundPeriod;
    const i = +this.CI_userRate;
    if(P&&n&&m&&i){
      this.CI_userAmount =  (P*Math.pow(1+i/(m*100),m*n)).toFixed(2);
    }
    else if(P&&I){
      this.CI_userAmount = (P+I).toFixed(2);
    }else{
      alert('Please fill in the required fields correctly.\nPlease fill in : P, m, n and i\nOr fill in: I and P');
    }
  }
  calculate_CI_Principal(){
    const A = +this.CI_userAmount;
    const n = +this.CI_userPeriod;
    const I = +this.CI_userInterest;
    const m = +this.CI_userCompoundPeriod;
    const i = +this.CI_userRate;

    if(A&&n&&i&&m){
      this.CI_userPrincipal = (A*Math.pow(1+i/(m*100),-m*n)).toFixed(2);
    }
    else if(I&&m&&n&&i){
      this.CI_userPrincipal = (I/(Math.pow(1+i/(100*m),m*n)-1)).toFixed(2);
    }else{
      alert('Please fill in the required fields correctly.\nPlease fill in : A, m, n and i\nOr fill in: I, m, n and i');
    }
  }
  calculate_CI_Period(){
    const A = +this.CI_userAmount;
    const P = +this.CI_userPrincipal;
    const I = +this.CI_userInterest;
    const m = +this.CI_userCompoundPeriod;
    const i = +this.CI_userRate;

    if(A&&P&&m&&i){
      this.CI_userPeriod = (Math.log(A/P)/(m*Math.log(1+i/(100*m)))).toFixed(2);
    }
    else if(I&&P&&m&&i){
      this.CI_userPeriod = (Math.log((P+I)/P)/(m*Math.log(1+i/(100*m)))).toFixed(2);
    }else{
      alert('Please fill in the required fields correctly.\nPlease fill in : A, P, m and i\nOr fill in: I, P, m and i');
    }
  }
  calculate_CI_Interest(){
    const A = +this.CI_userAmount;
    const P = +this.CI_userPrincipal;
    const n = +this.CI_userPeriod;
    const m = +this.CI_userCompoundPeriod;
    const i = +this.CI_userRate;
    if(P&&m&&n&&i){
      this.CI_userInterest = (P*(Math.pow(1+i/(100*m),n*m)-1)).toFixed(2);
    }
    else if(A&&P){
      this.CI_userInterest = (A-P).toFixed(2);
    }else{
      alert('Please fill in the required fields correctly.\nPlease fill in : A and P\nOr fill in: P, n, m and i');
    }
  }
  calculate_CI_Rate(){
    const A = +this.CI_userAmount;
    const P = +this.CI_userPrincipal;
    const I = +this.CI_userInterest;
    const m = +this.CI_userCompoundPeriod;
    const n = +this.CI_userPeriod;

    if(A&&P&&m&&n){
      this.CI_userRate = (100*m*(Math.pow(A/P,1/(m*n))-1)).toFixed(2);
    }
    else if(I&&P&&m&&n){
      this.CI_userRate = (100*m*(Math.pow((P+I)/P,1/(m*n))-1)).toFixed(2);
    }else{
      alert('Please fill in the required fields correctly.\nPlease fill in : A, P, m and n\nOr fill in: I, P, m and n');
    }
  }
  calculateEffectiveRate(){
    const m = +this.CI_userCompoundPeriod;
    const i = +this.CI_userRate;
    if(m&&i){
      this.CI_userEffecitveRate = (100 * (Math.pow(1 + i / (100 * m), m) - 1)).toFixed(2)
    }else{
      alert('Please fill in the required fields correctly.\nPlease fill in : m and i');
    }
  }
}
