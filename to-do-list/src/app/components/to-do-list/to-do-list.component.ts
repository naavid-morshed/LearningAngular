import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TODO_LIST_Interface} from "../../interface/TODO_LIST_Interface";
// import {FormsModule} from "@angular/forms";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TodoService} from "../../services/serve-to-do/todo.service";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  public to_do_list: TODO_LIST_Interface[] = [];

  public faTime: IconDefinition = faTimes;

  public todoService: TodoService = inject(TodoService);
  // constructor(private toDoService: TodoService) {
  // }

  // ngOnInit(): void {
  //   this.toDoService.getToDoJSON().subscribe(
  //     (to_do_list: TODO_LIST_Interface[]): void => {
  //       this.to_do_list = to_do_list;
  //     }
  //   );
  // }

  constructor() {
    this.todoService.getToDoJSON().then(
      (to_do_list: TODO_LIST_Interface[]): void => {
        this.to_do_list = to_do_list;
      }
    )
  }
}
