export enum EventStatus {
    Pending,
    Running,
    Rejected,
    Complete,
    Accepted
}

export enum EventType {
    Changelist,
    Build
}

export class EventItemModel {
    constructor(
        public id: number,
        public title: string,
        public isExpanded: boolean,
        public state: EventStatus,
        public type: EventType,
        public owner?: string,
        public timeStarted?: Date,
    ) {
    }
}