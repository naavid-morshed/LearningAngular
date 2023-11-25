import {Component} from '@angular/core';

import {CommonModule} from '@angular/common';
// import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from '@angular/router';

import {HeaderComponent} from "./components/header/header.component";
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ToDoListComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'to-do-list';
}
