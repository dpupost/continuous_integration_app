"use strict";
(function (EventStatus) {
    EventStatus[EventStatus["Pending"] = 0] = "Pending";
    EventStatus[EventStatus["Running"] = 1] = "Running";
    EventStatus[EventStatus["Rejected"] = 2] = "Rejected";
    EventStatus[EventStatus["Complete"] = 3] = "Complete";
    EventStatus[EventStatus["Accepted"] = 4] = "Accepted";
})(exports.EventStatus || (exports.EventStatus = {}));
var EventStatus = exports.EventStatus;
(function (EventType) {
    EventType[EventType["Changelist"] = 0] = "Changelist";
    EventType[EventType["Build"] = 1] = "Build";
})(exports.EventType || (exports.EventType = {}));
var EventType = exports.EventType;
var EventItemModel = (function () {
    function EventItemModel(id, title, isExpanded, state, type, owner, timeStarted) {
        this.id = id;
        this.title = title;
        this.isExpanded = isExpanded;
        this.state = state;
        this.type = type;
        this.owner = owner;
        this.timeStarted = timeStarted;
    }
    return EventItemModel;
}());
exports.EventItemModel = EventItemModel;
//# sourceMappingURL=event-item.model.js.map