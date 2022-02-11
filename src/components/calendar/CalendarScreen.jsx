import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Event } from './Event';
import { CalendarModal } from './CalendarModal';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
	{
		title: 'Cumpleaños',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar el pastel',
		user: {
			_id: '123',
			name: 'Enrique'
		}
	}
];

export const CalendarScreen = () => {
	const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

	const onDoubleClick = (e) => {
		console.log(e);
	};
	const onSelectEvent = (e) => {
		console.log(e);
	};
	const onViewEvent = (e) => {
		console.log(e);
		setLastView(e);
		localStorage.setItem('lastView', e);
	};

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#E1C340',
			opacity: 0.7,
			display: 'block',
			color: 'white'
		};

		return { style };
	};

	return (
		<div className="calendar-screen">
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				eventPropGetter={eventStyleGetter}
				components={{ event: Event }}
				onDoubleClickEvent={onDoubleClick}
				onView={onViewEvent}
				onSelectEvent={onSelectEvent}
				view={lastView}
			/>
			<CalendarModal />
		</div>
	);
};
