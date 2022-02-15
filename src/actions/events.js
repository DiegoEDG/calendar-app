import { types } from '../types/types';

export const setActiveEventAction = (event) => ({
	type: types.eventSetActive,
	payload: event
});
