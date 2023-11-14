import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-if-condition',
  templateUrl: './ng-if-condition.component.html',
  styles: [`
    .changeColor {
      color: #0a4a65;
    }
  `]
})
export class NgIfConditionComponent {
  showOutput: boolean = false;
  inputList: String[] = [];
  inputText: String = "";

  buttonPressed(): void {
    this.showOutput = true;
    this.inputList.push(this.inputText);
    this.inputText = "";
    setTimeout(()=>{
      this.showOutput = false;
    },2000);
  }
}
