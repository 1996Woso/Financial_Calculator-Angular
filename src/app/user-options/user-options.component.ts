import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css'
})
export class UserOptionsComponent {
  selectedInterestType = 'select-option';  // Default value
  @Output() interestTypeChanged = new EventEmitter<string>();  // EventEmitter to notify parent component about the selection change

  onInterestTypeChange() {
    this.interestTypeChanged.emit(this.selectedInterestType);  // Emit the selected interest type when it changes
  }
}
