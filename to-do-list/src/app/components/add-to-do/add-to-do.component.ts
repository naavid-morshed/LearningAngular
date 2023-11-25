import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {TO_DO} from "../../interface/TO_DO";
import {randomInt} from "crypto";
import {UiService} from "../../services/ui-service/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-to-do.component.html',
})
export class AddToDoComponent {
  @Output() onSubmitToDo: EventEmitter<TO_DO> = new EventEmitter<TO_DO>();

  public task: string = "";
  public dayAndTime: string = "";
  public reminder: boolean = false;

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

    const newToDo: TO_DO = {
      "id": 10,
      "task": this.task,
      "due": this.dayAndTime,
      "reminder": this.reminder
    }

    this.onSubmitToDo.emit(newToDo);

    this.task = "";
    this.dayAndTime = "";
    this.reminder = false;
  }
}
