export class EventItemMetricsModel {
    constructor(
                public eventId: number,
                public test: number,
                public maintainability: number,
                public security: number,
                public workmanship: number) {
    }
}
