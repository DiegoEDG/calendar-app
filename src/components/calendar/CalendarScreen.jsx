import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../ui/Navbar';
import { Event } from './Event';
import { CalendarModal } from './CalendarModal';
import { uiOpenModalAction } from '../../actions/ui';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { setActiveEventAction } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { calendarSlotSelectedAction } from '../../actions/calendar';

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
	const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
	const dispatch = useDispatch();
	const { events } = useSelector((state) => state.event);

	const onDoubleClick = (e) => {
		dispatch(uiOpenModalAction());
	};
	const onSelectEvent = (e) => {
		dispatch(setActiveEventAction(e));
	};
	const onViewEvent = (e) => {
		setLastView(e);
		localStorage.setItem('lastView', e);
	};

	const onSelectSlot = (e) => {
		dispatch(calendarSlotSelectedAction(e));
		dispatch(uiOpenModalAction());
		console.log(e);
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
				onSelectSlot={onSelectSlot}
				selectable={true}
				view={lastView}
			/>
			<CalendarModal />
			<AddNewFab />
		</div>
	);
};
