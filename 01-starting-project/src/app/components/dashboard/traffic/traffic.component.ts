import {Component, inject} from '@angular/core';
import {TrafficService} from "../../../services/traffic.service";

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  trafficService: TrafficService = inject(TrafficService);

  percentageArray: string[] = this.trafficService.calculatePercentage;
}
