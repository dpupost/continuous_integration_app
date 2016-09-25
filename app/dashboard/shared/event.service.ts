import {Injectable} from '@angular/core';
import {EventItemModel, EventStatus, EventType} from "../event-item/event-item.model";
import {EventItemMetricsModel} from "../event-item-metrics/event-item-metrics.model";

@Injectable()
export class EventService {
    getEvents(): Promise<EventItemModel[]> {
        return eventsPromise;
    }

    getMetrics(id: number): Promise<EventItemMetricsModel>{
        return metricsPromise.then(metrics => metrics.filter(metric => metric.eventId == id)[0]);
    }
}

var EVENTS = [
    new EventItemModel(432463, 'Tenrox-R1_1235', false, EventStatus.Pending, EventType.Build),
    new EventItemModel(432462, '432462', false, EventStatus.Running, EventType.Changelist, 'jtuck', new Date(2014, 4, 18, 24, 12)),
    new EventItemModel(432461, '432461', false, EventStatus.Rejected, EventType.Changelist, 'samy', new Date(2014, 4, 18, 10, 53)),
    new EventItemModel(432460, 'Tenrox-R1_1234', false, EventStatus.Complete, EventType.Build, null, new Date(2014, 4, 17, 9, 42),),
    new EventItemModel(432459, '432459', false, EventStatus.Rejected, EventType.Changelist, 'samy', new Date(2014, 4, 17, 7, 51)),
    new EventItemModel(432458, '432458', false, EventStatus.Accepted, EventType.Changelist, 'samy', new Date(2014, 4, 17, 6, 43)),
    new EventItemModel(432457, '432457', false, EventStatus.Accepted, EventType.Changelist, 'jtuck', new Date(2014, 4, 16, 16, 43)),
    new EventItemModel(432456, '432456', false, EventStatus.Accepted, EventType.Changelist, 'jtuck', new Date(2014, 4, 16, 11, 43))
];

var METRICS =[
    new EventItemMetricsModel(432463, 64, 53, 64, 72),
    new EventItemMetricsModel(432462, 60, 23, 24, 12),
    new EventItemMetricsModel(432461, 69, 33, 67, 73),
    new EventItemMetricsModel(432460, 68, 43, 11, 50),
    new EventItemMetricsModel(432459, 67, 53, 84, 11),
    new EventItemMetricsModel(432458, 66, 63, 94, 99),
    new EventItemMetricsModel(432457, 64, 73, 8, 87),
    new EventItemMetricsModel(432456, 44, 83, 1, 13),
];

var eventsPromise = Promise.resolve(EVENTS);
var metricsPromise = Promise.resolve(METRICS);