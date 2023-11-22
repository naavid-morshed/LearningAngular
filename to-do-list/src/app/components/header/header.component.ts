import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomButtonComponent} from "../custom-button/custom-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  toggleAddTask(): void {
    console.log("asf")
  }
}
