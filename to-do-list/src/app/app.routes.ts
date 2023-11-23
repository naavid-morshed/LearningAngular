import {Routes} from '@angular/router';
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {AboutComponent} from "./components/about/about.component";

export const routes: Routes = [
  {path: '', component: ToDoListComponent},
  {path: 'about', component: AboutComponent}
];
