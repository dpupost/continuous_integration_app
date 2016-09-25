import {Component} from '@angular/core';

@Component({
    selector: 'event-item',
    inputs: ['event'],
    template: `
        <div class="row">
            <div><img src=""></div>
            <div>{{event.title}}</div>
            <div>{{event.owner}}</div>
            <div>{{event.timeStarted}}</div>
            <div>{{event.state}}</div>
        </div>
        <div class="row">
          <event-item-metrics [eventId]="event.id"></event-item-metrics>
        </div>
        `,
   // styleUrls: ['./event-item.component.css']
})
export class EventItem {
    constructor() { }
}
