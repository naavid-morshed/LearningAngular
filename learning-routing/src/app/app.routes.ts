import {Routes} from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {ThirdComponent} from "./components/third/third.component";

export const routes: Routes = [
  {path: 'first-component', component: FirstComponent,title:'I am first'},
  {path: 'second-component', component: SecondComponent},
  {path: 'third-component', component: ThirdComponent}
];
