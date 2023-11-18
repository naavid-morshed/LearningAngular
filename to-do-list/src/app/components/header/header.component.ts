import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomButtonComponent} from "../custom-button/custom-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
