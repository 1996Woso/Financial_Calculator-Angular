import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialService } from '../../financial.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  userPrincipal = '';
  userAmount = '';
  userRate = '';
  userInterest = '';
  userPeriod = ''
  constructor(private financialService:FinancialService){}
  onSubmit(){
    this.financialService.calculateFinancialResults({
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
    else if(interestRate&&interestRate&&period){
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
      this.userRate = (100*(interestEarned/(principal*interestRate))).toFixed(2);
    }else{
      alert('Please fill in required fields correctly.');
    }
  }

  calculateRate(){
    const principal = +this.userPrincipal;
    const period = +this.userRate;
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
    const period = +this.userRate;
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
}
