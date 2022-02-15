import moment from 'moment';
import { types } from '../types/types';

const initialState = {
	events: [
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
	],
	activeEvent: null
};

export const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		// case types.eventNewEvent:
		// 	return {
		// 		...state,
		// 		events: [...events, action.payload]
		// 	};

		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload
			};

		default:
			return state;
	}
};
