import {Component, Input} from '@angular/core';
import {EventService} from '../shared/event.service';
import {EventItemMetricsModel} from "../event-item-metrics/event-item-metrics.model";

@Component({
    selector: 'event-item-metrics',

    template: `
        <div>
            <div>{{metrics.test}}</div>
            <div>{{metrics.maintainability}}</div>
            <div>{{metrics.security}}</div>
            <div>{{metrics.workmanship}}</div>
        </div>
        `,
    providers: [EventService],
    styleUrls: ['app/dashboard/event-item-metrics/event-item-metrics.component.css']
})
export class EventItemMetrics {
    @Input() eventId: number;
    metrics: EventItemMetricsModel;

    constructor(private _service: EventService) { }

    getMetrics(): void {
        this._service.getMetrics(this.eventId).then(metrics => this.metrics = metrics));
    }

    ngOnInit(): void {
        this.getMetrics();
    }
}
