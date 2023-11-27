import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TO_DO} from "../../interface/todo";
import {TodoService} from "../../services/serve-to-do/todo.service";
import {AddToDoComponent} from "../add-to-do/add-to-do.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Todo_body} from "../../interface/todo_body";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, AddToDoComponent, FaIconComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  public to_do_list: TO_DO[] = [];
  @Output() onEditPressed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private toDoService: TodoService) {
  }

  ngOnInit(): void {
    this.toDoService.getToDoJSON().subscribe(
      (to_do_list: TO_DO[]): void => {
        this.to_do_list = to_do_list;
      }
    );
  }

  public faTime: IconDefinition = faTimes;
  public faEdit: IconDefinition = faEdit;

  // not working
  deleteItem(item: TO_DO): void {
    this.toDoService.deleteToDo(item).subscribe(
      () => (this.to_do_list = this.to_do_list.filter(
        (t: TO_DO): boolean => t.id !== item.id
      ))
    );
  }

  addToDo($todo: Todo_body): void {
    console.log($todo)
    this.toDoService.addToDoService($todo).subscribe(
      async (response: Todo_body) => {
        this.to_do_list.push(<TO_DO>response)
        console.log(this.to_do_list)
      }
    )

  }

  updateToDo($todo: TO_DO): void {
    this.toDoService.updateTodoService($todo).subscribe()
  }

  editItem(item: TO_DO) {
    this.onEditPressed.emit(item);
  }
}
