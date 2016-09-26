import {Component} from '@angular/core';
import {EventService} from '../shared/event.service';
import {EventItemModel} from '../event-item/event-item.model';

@Component({
    selector: 'event-items-list',
    template: `
        <div class="row">
            <div>Changelist / Build</div>
            <div>Owner</div>
            <div>Time Started</div>
            <div>State</div>
            <div>Metrics</div>
            <div>Build</div>
            <div>Unit Test</div>
            <div>Functional Test</div>
        </div>
        
        <div *ngFor="let eventItem of events">
            <event-item [event]="eventItem">Loading...</event-item>
        </div>
       `,
    providers: [EventService],
    styleUrls: ['/event-items-list.component.css']
})
export class EventItemsList {
    events: EventItemModel[];

    constructor(private _service: EventService) { }

    getEvents(): void {
         this._service.getEvents().subscribe(events=>this.events = events);
    }

    ngOnInit(): void {
        this.getEvents();
    }
}

