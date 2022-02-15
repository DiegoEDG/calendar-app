import { combineReducers } from 'redux';
import { calendarReducer } from './calendarReducer';
import { eventReducer } from './eventReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	event: eventReducer,
	calendar: calendarReducer
});
