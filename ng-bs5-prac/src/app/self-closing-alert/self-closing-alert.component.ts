import {Component, ViewChild} from '@angular/core';
import {debounceTime, Subject, tap} from "rxjs";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-self-closing-alert',
  standalone: true,
  imports: [
    NgbAlert
  ],
  templateUrl: './self-closing-alert.component.html',
  styles: ``
})
export class SelfClosingAlertComponent {
  private _message$ = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert = {} as NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert = {} as NgbAlert;

  constructor() {
    setTimeout(() => this.staticAlert.close(), 20000);

    this._message$
      .pipe(
        takeUntilDestroyed(),
        tap((message) => (this.successMessage = message)),
        debounceTime(5000),
      )
      .subscribe(() => this.selfClosingAlert?.close());
  }

  public changeSuccessMessage() {
    this._message$.next(`${new Date()} - Message successfully changed.`);
  }
}
