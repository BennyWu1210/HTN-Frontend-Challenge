import { TEvent } from "./schema";

export const createCalendarEvents = (events: TEvent[]): string => {
    const icsEvents = events.map((event) => {
        return `BEGIN:VEVENT
  SUMMARY:${event.name.replace(/,/g, '\\,')}
  DTSTART:${formatDateToICS(new Date(event.start_time).toISOString())}
  DTEND:${formatDateToICS(new Date(event.end_time).toISOString())}
  DESCRIPTION:${event.description !== undefined ? event.description.replace(/,/g, '\\,') : "No Description"}
  END:VEVENT`;
    }).join('\n');

    return `BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//hacksw/handcal//NONSGML v1.0//EN
  ${icsEvents}
  END:VCALENDAR`;
  
};



const formatDateToICS = (date: string) => {
    const icsDate = new Date(date).toISOString().replace(/[-:]/g, '').replace(/\..*$/, '');
    return icsDate;
};
