import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {randomInt} from "crypto";
import {UiService} from "../../services/serve-ui/ui.service";
import {Subscription} from "rxjs";
import {TO_DO} from "../../interface/todo";
import {Todo_body} from "../../interface/todo_body";

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-to-do.component.html',
})
export class AddToDoComponent {
  @Output() onSubmitToDo: EventEmitter<any> = new EventEmitter<any>();

  public task: string = "";
  public details: string = "";
  public dayAndTime: string = "";
  public dueDate:string = "";
  public dueTime:string = "";

  public showAddTask: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (bool) => this.showAddTask = bool
    )
  }

  submitToDo() {
    if (!this.task) {
      alert("Please enter a Task");
      return;
    } else if (!this.dayAndTime) {
      alert("Please enter a Date");
      return;
    }

    [this.dueDate,this.dueTime] = this.dayAndTime.split("T");

    const todo_body : Todo_body = {
      task: this.task,
      details: this.details,
      dueDate: this.dueDate,
      dueTime: this.dueTime,
    };

    this.onSubmitToDo.emit(todo_body);

    this.task = "";
    this.dayAndTime = "";
    this.dayAndTime = "";
  }
}
