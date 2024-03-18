import React from 'react'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "Training", start: new Date() }];

export default function Calendar() {
  return (
    <div className="overlay overlay-black overlay-40 pt-90 pb-60"
    >
      <div className='calendar-container'>
        <h1>MY DIARY</h1>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
        />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
