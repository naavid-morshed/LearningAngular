import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowTaskComponent } from './components/add-task/show-task/show-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowTaskComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
