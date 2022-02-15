import { types } from '../types/types';

export const addNewEventAction = (event) => ({
	type: types.eventNewEvent,
	payload: event
});

export const setActiveEventAction = (event) => ({
	type: types.eventSetActive,
	payload: event
});

export const clearActiveEventAction = () => ({
	type: types.eventClearActive
});

export const updateEventAction = (event) => ({
	type: types.eventUpdated,
	payload: event
});
