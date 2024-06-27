import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserOptionsComponent } from "./user-options/user-options.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserInputComponent, UserOptionsComponent]
})
export class AppComponent {
  selectedInterestType = 'select-option';
  onInterestTypeChanged(interestType:string){
    this.selectedInterestType = interestType;
  }
}
