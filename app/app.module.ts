import {NgModule}         from '@angular/core';
import {BrowserModule}    from '@angular/platform-browser';
import {FormsModule}      from '@angular/forms';
import {routing}          from './app.routing';
import {AppComponent}     from './app.component';
import {EventItemsList}   from './dashboard/event-items-list/event-items-list.component';
import {EventItem}        from './dashboard/event-item/event-item.component';
import {EventItemMetrics} from './dashboard/event-item-metrics/event-item-metrics.component';
import {EventService} from "./dashboard/shared/event.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing],
    declarations: [
        AppComponent,
        EventItemsList,
        EventItem,
        EventItemMetrics],
    providers: [EventService],
    bootstrap: [AppComponent]
})
export class AppModule {
}