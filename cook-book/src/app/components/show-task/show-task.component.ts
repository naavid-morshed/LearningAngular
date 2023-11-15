import {Component} from '@angular/core';
import {toDo} from "../../model/to-do-task";

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

  toDoList: toDo[] = [
    new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}`,
      "Sunday"
    ),new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}`,
      "Sunday"
    ),new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}`,
      "Sunday"
    ), new toDo(
      "clean",
      "clean home",
      `${this.day}, ${this.dateOfMonth}/${this.month}/${this.year}`,
      "Sunday"
    ),
  ];

  deleteTask(index: number): void {
    this.toDoList.splice(index, 1)
  }
}
