import {Component, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {

  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  onClickCustomButton() {
    this.btnClick.emit();
  }
}
