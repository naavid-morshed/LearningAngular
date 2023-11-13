import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {
  inputText1: String = "Default Val";
  inputText2: String = "Default Value";

  onEditInputField(event: Event) {
    console.log(event);
    this.inputText1 = (<HTMLInputElement>event.target).value;
  }
}
