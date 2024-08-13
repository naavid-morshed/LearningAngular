import {Injectable} from '@angular/core';
import {TrafficModel} from "../models/traffic.model";

@Injectable({
    providedIn: 'root'
})
export class TrafficService {
    private dummyTrafficData: TrafficModel[] = [
        {
            id: 'd1',
            value: 433,
        },
        {
            id: 'd2',
            value: 260,
        },
        {
            id: 'd3',
            value: 290,
        },
        {
            id: 'd4',
            value: 410,
        },
        {
            id: 'd5',
            value: 397,
        },
        {
            id: 'd6',
            value: 488,
        },
        {
            id: 'd47',
            value: 589,
        },
    ];

    get calculatePercentage(): string[] {
        return this.dummyTrafficData.map(item => `${(item.value / this.maxTraffic * 100)}%`);
    }

    get maxTraffic(): number {
        return Math.max(...this.dummyTrafficData.map((data: TrafficModel) => data.value));
    }
}
