import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {ServerStatusComponent} from "./components/dashboard/server-status/server-status.component";
import {TrafficComponent} from "./components/dashboard/traffic/traffic.component";
import {TicketsComponent} from "./components/dashboard/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgOptimizedImage,
    HeaderComponent,
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent
  ]
})
export class AppComponent {
  currentStatus = 'online';
}
