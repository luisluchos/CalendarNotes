export interface Event {
    event:EventCalendar
}
export interface EventCalendar {
    title:   string;
    notes:   string;
    start:   Date;
    end:     Date;
    bgColor: string;
    user:    User;
}

export interface User {
    _id:  number;
    name: string;
}