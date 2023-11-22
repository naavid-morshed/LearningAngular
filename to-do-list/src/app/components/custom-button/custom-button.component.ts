import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {

  @Output() public customBtnClick: EventEmitter<any> = new EventEmitter();

  onClickCustomButton(): void {
    this.customBtnClick.emit();
  }
}
