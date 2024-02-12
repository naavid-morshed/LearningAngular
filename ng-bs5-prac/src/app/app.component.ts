import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AccordationComponent} from "./accordation/accordation.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {SelfClosingAlertComponent} from "./self-closing-alert/self-closing-alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccordationComponent, AlertsComponent, SelfClosingAlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bs5-prac';
}
