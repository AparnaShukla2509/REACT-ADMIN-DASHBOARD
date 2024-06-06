import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'All Day Event',
    start: new Date(),
    end: new Date(),
  },
];

const MyCalendar = () => (
  <div style={{ height: 500 }}>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
  </div>
);

export default MyCalendar;
