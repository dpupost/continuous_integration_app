import {Component, Input} from '@angular/core';
import {EventService} from '../shared/event.service';
import {EventItemMetricsModel} from '../event-item-metrics/event-item-metrics.model';

@Component({
    selector: 'event-item-metrics',
    template: `
        <div class="metrics-container">
            <span class="metrics-container-title">Metrics</span>
            <div class="clear"></div>
            <div class="metrics-arrow-container">
                <div class='metrics-arrow up'>{{metrics.test}}</div>
                <span>Test</span>
            </div>
            <div class="metrics-arrow-container">
                <div class='metrics-arrow down'>{{metrics.maintainability}}</div>
                <span>Maintainability</span>
            </div>
            <div class="metrics-arrow-container">
                <div class='metrics-arrow right'>{{metrics.security}}</div>
                <span>Security</span>
            </div>
            <div class="metrics-arrow-container">
                <div class='metrics-arrow right'>{{metrics.workmanship}}</div>
                <span>Workmanship</span>
            </div>
            <div class="clear"></div>
        </div>
        `,
    providers: [EventService],
    styleUrls: ['./app/dashboard/event-item-metrics/event-item-metrics.component.css']
})
export class EventItemMetrics {
    @Input() eventId: number;
    metrics: EventItemMetricsModel;

    constructor(private _service: EventService) { }

    getMetrics(): void {
        this._service.getMetrics(this.eventId).subscribe(metrics => this.metrics = metrics);
    }

    ngOnInit(): void {
        this.getMetrics();
    }
}
