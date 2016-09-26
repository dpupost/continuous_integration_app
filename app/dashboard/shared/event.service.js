"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_item_model_1 = require('../event-item/event-item.model');
var event_item_metrics_model_1 = require('../event-item-metrics/event-item-metrics.model');
var Observable_1 = require('rxjs/Observable');
var EventService = (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        return Observable_1.Observable.create(function (observer) {
            observer.next(EVENTS);
            observer.complete();
        });
    };
    EventService.prototype.getMetrics = function (id) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(METRICS.filter(function (metric) { return metric.eventId == id; })[0]);
            observer.complete();
        });
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
var EVENTS = [
    new event_item_model_1.EventItemModel(432463, 'Tenrox-R1_1235', false, event_item_model_1.EventStatus.Pending, event_item_model_1.EventType.Build),
    new event_item_model_1.EventItemModel(432462, '432462', false, event_item_model_1.EventStatus.Running, event_item_model_1.EventType.Changelist, 'jtuck', new Date(2014, 4, 18, 24, 12)),
    new event_item_model_1.EventItemModel(432461, '432461', false, event_item_model_1.EventStatus.Rejected, event_item_model_1.EventType.Changelist, 'samy', new Date(2014, 4, 18, 10, 53)),
    new event_item_model_1.EventItemModel(432460, 'Tenrox-R1_1234', false, event_item_model_1.EventStatus.Complete, event_item_model_1.EventType.Build, null, new Date(2014, 4, 17, 9, 42)),
    new event_item_model_1.EventItemModel(432459, '432459', false, event_item_model_1.EventStatus.Rejected, event_item_model_1.EventType.Changelist, 'samy', new Date(2014, 4, 17, 7, 51)),
    new event_item_model_1.EventItemModel(432458, '432458', false, event_item_model_1.EventStatus.Accepted, event_item_model_1.EventType.Changelist, 'samy', new Date(2014, 4, 17, 6, 43)),
    new event_item_model_1.EventItemModel(432457, '432457', false, event_item_model_1.EventStatus.Accepted, event_item_model_1.EventType.Changelist, 'jtuck', new Date(2014, 4, 16, 16, 43)),
    new event_item_model_1.EventItemModel(432456, '432456', false, event_item_model_1.EventStatus.Accepted, event_item_model_1.EventType.Changelist, 'jtuck', new Date(2014, 4, 16, 11, 43))
];
var METRICS = [
    new event_item_metrics_model_1.EventItemMetricsModel(432463, 64, 53, 64, 72),
    new event_item_metrics_model_1.EventItemMetricsModel(432462, 60, 23, 24, 12),
    new event_item_metrics_model_1.EventItemMetricsModel(432461, 69, 33, 67, 73),
    new event_item_metrics_model_1.EventItemMetricsModel(432460, 68, 43, 11, 50),
    new event_item_metrics_model_1.EventItemMetricsModel(432459, 67, 53, 84, 11),
    new event_item_metrics_model_1.EventItemMetricsModel(432458, 66, 63, 94, 99),
    new event_item_metrics_model_1.EventItemMetricsModel(432457, 64, 73, 8, 87),
    new event_item_metrics_model_1.EventItemMetricsModel(432456, 44, 83, 1, 13),
];
//# sourceMappingURL=event.service.js.map