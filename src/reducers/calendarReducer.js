import { types } from '../types/types';

const initialState = {
	slotSelected: null
};
export const calendarReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.calendarSlotSelected:
			return {
				...state,
				slotSelected: action.payload
			};

		default:
			return state;
	}
};
