"use strict";
var EventItemMetricsModel = (function () {
    function EventItemMetricsModel(eventId, test, maintainability, security, workmanship) {
        this.eventId = eventId;
        this.test = test;
        this.maintainability = maintainability;
        this.security = security;
        this.workmanship = workmanship;
    }
    return EventItemMetricsModel;
}());
exports.EventItemMetricsModel = EventItemMetricsModel;
//# sourceMappingURL=event-item-metrics.model.js.map