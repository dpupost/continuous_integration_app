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
var event_service_1 = require('../shared/event.service');
var EventItemsList = (function () {
    function EventItemsList(_service) {
        this._service = _service;
    }
    EventItemsList.prototype.getEvents = function () {
        var _this = this;
        this._service.getEvents().then(function (events) { return _this.events = events; });
    };
    EventItemsList.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventItemsList = __decorate([
        core_1.Component({
            selector: 'event-items-list',
            template: "\n        <div class=\"row\">\n            <div>Changelist / Build</div>\n            <div>Owner</div>\n            <div>Time Started</div>\n            <div>State</div>\n            <div>Metrics</div>\n            <div>Build</div>\n            <div>Unit Test</div>\n            <div>Functional Test</div>\n        </div>\n        \n        <div *ngFor=\"let eventItem of events\">\n            <event-item [event]=\"eventItem\">Loading...</event-item>\n        </div>\n       ",
            //<event-item *ngFor="let eventItem of events" [event]="eventItem">Loading...</event-item>
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventItemsList);
    return EventItemsList;
}());
exports.EventItemsList = EventItemsList;
//# sourceMappingURL=event-items-list.component.js.map