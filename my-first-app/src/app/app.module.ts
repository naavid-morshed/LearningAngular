import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {MultipleTypesOfSelectorsComponent} from './multiple-types-of-selectors/multiple-types-of-selectors.component';
import {ButtonTestComponent} from './button-test/button-test.component';
import {FormsModule} from "@angular/forms";
import {Assignment2Component} from './assignment2/assignment2.component';
import {NgIfConditionComponent} from './ng-if-condition/ng-if-condition.component';
import {Assignment3Component} from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MultipleTypesOfSelectorsComponent,
    ButtonTestComponent,
    Assignment2Component,
    NgIfConditionComponent,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
