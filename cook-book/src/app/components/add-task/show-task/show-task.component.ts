import {Component} from '@angular/core';
import {toDo} from "../../../model/to-do-task";

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {
  private date: Date = new Date();
  private month: number = this.date.getMonth();
  private year: number = this.date.getFullYear();
  private dateOfMonth: number = this.date.getDate();

  private weekday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  private day: string = this.weekday[this.date.getDay()]
  private localHour: number = this.date.getHours() > 13 ? this.date.getHours() - 12 : this.date.getHours() == 0 ? this.date.getHours() + 12 : this.date.getHours();
  private minutes: string = this.date.getHours() < 10 ? "0".concat(this.date.getMinutes().toString()) : this.date.getMinutes().toString();

  toDoList: toDo[] = [
    new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}, ${this.localHour}:${this.minutes}`,
      "Sunday"
    ),
    new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}, ${this.localHour}:${this.minutes}`,
      "Sunday"
    ),
    new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}, ${this.localHour}:${this.minutes}`,
      "Sunday"
    ),
    new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}, ${this.localHour}:${this.minutes}`,
      "Sunday"
    ),
  ];

  checkTask(index: number): void {
    this.indexOfToDoListArr.push(index);

  }

  public indexOfToDoListArr: number[] = [];

}
