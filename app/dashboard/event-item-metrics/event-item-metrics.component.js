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
var EventItemMetrics = (function () {
    function EventItemMetrics(_service) {
        this._service = _service;
    }
    EventItemMetrics.prototype.getMetrics = function () {
        var _this = this;
        this._service.getMetrics(this.eventId).subscribe(function (metrics) { return _this.metrics = metrics; });
    };
    EventItemMetrics.prototype.ngOnInit = function () {
        this.getMetrics();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], EventItemMetrics.prototype, "eventId", void 0);
    EventItemMetrics = __decorate([
        core_1.Component({
            selector: 'event-item-metrics',
            template: "\n        <div class=\"metrics-container\">\n            <span class=\"metrics-container-title\">Metrics</span>\n            <div class=\"clear\"></div>\n            <div class=\"metrics-arrow-container\">\n                <div class='metrics-arrow up'>{{metrics.test}}</div>\n                <span>Test</span>\n            </div>\n            <div class=\"metrics-arrow-container\">\n                <div class='metrics-arrow down'>{{metrics.maintainability}}</div>\n                <span>Maintainability</span>\n            </div>\n            <div class=\"metrics-arrow-container\">\n                <div class='metrics-arrow right'>{{metrics.security}}</div>\n                <span>Security</span>\n            </div>\n            <div class=\"metrics-arrow-container\">\n                <div class='metrics-arrow right'>{{metrics.workmanship}}</div>\n                <span>Workmanship</span>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        ",
            providers: [event_service_1.EventService],
            styleUrls: ['./app/dashboard/event-item-metrics/event-item-metrics.component.css']
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventItemMetrics);
    return EventItemMetrics;
}());
exports.EventItemMetrics = EventItemMetrics;
//# sourceMappingURL=event-item-metrics.component.js.map