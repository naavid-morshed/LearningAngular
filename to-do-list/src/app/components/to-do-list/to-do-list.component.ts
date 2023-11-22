import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TO_DO} from "../../interface/TO_DO";
// import {FormsModule} from "@angular/forms";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TodoService} from "../../services/serve-to-do/todo.service";
import {AddToDoComponent} from "../add-to-do/add-to-do.component";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FaIconComponent, AddToDoComponent],
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent implements OnInit {
  public to_do_list: TO_DO[] = [];

  public faTime: IconDefinition = faTimes;

  // below is another way to do dependency injection but is not preferred by Angular
  // private toDoService: TodoService = inject(TodoService);

  /*
  Injecting through constructor is the standard and recommended way to inject dependencies in Angular components.
  It's the best practice because it allows Angular to manage the lifecycle of the injected service,
  handle any necessary setup, and ensure that the service is available when the component is created.
   */
  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.getToDoJSON().subscribe(
      (to_do_list: TO_DO[]): void => {
        this.to_do_list = to_do_list;
      }
    );
  }

  // constructor() {
  //   this.todoService.getToDoJSON().then(
  //     (to_do_list: TODO_LIST_Interface[]): void => {
  //       this.to_do_list = to_do_list;
  //     }
  //   )
  // }

  deleteItem(item: TO_DO): void {
    this.toDoService.deleteToDo(item).subscribe(
      () => (this.to_do_list = this.to_do_list.filter(
        (t: TO_DO): boolean => t.id !== item.id
      ))
    );
  }

  toggleReminder(todo: TO_DO): void {
    todo.reminder = !todo.reminder;
  }

  addToDo($todo: TO_DO): void {
    this.toDoService.addTdoDoService($todo).subscribe(
      (response: TO_DO): void => {
        this.to_do_list.push(response)
      }
    )
  }
}
