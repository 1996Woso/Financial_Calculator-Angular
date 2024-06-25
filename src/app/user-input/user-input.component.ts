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
    else if(accumulatedAmount && interestEarned){
      this.userPrincipal = (accumulatedAmount-interestEarned).toFixed(2);
    } else {
      alert('Please enter values for Accumulated Amount, Interest Rate, and Period.');
    }
    
  }
}
