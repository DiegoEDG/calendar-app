import { types } from '../types/types';

export const calendarSlotSelectedAction = (Slot) => ({
	type: types.calendarSlotSelected,
	payload: Slot
});
