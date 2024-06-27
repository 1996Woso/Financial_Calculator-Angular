import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css'
})
export class UserOptionsComponent {
  selectedInterestType = 'select-option';
  @Output() interestTypeChanged = new EventEmitter<string>();

  onInterestTypeChange(){
    this.interestTypeChanged.emit(this.selectedInterestType);
  }
}
