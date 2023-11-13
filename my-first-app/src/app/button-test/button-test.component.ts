import {Component} from '@angular/core';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.css'
})
export class ButtonTestComponent {
  buttonDisabled: boolean = true;
  serverStatus : String = "Server not found";

  constructor() {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2000);
  }

  public onClickServerButton(): void {
    this.serverStatus = "Server created";
  }
}
