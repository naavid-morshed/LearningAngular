import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {

  @Output() public btnClick: EventEmitter<any> = new EventEmitter();

  onClickCustomButton(): void {
    this.btnClick.emit();
  }
}
