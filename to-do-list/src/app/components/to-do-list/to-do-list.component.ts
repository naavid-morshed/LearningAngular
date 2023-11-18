import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TODO_Service} from "../../interface/TODO_Service";
import {TO_DO} from "../../to-do-list";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  to_do_list: TODO_Service[] = TO_DO;


}
