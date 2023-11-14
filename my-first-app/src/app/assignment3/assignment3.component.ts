import {Component} from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {
  showParagraph: boolean = false;

  logArr: number[] = [];

  displayButtonClicked(): void {
    this.logArr.push(this.logArr.length + 1)
    this.showParagraph ? this.showParagraph = false : this.showParagraph = true;
  }

  setColor(num: number): String {
    return num >= 4 && num <=10 ? 'red': 'transparent';
  }
}
