import React from 'react';
import { useDispatch } from 'react-redux';
import { clearActiveEventAction } from '../../actions/events';
import { uiOpenModalAction } from '../../actions/ui';

export const AddNewFab = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(clearActiveEventAction());
		dispatch(uiOpenModalAction());
	};
	return (
		<button className="btn btn-primary fab" onClick={handleClick}>
			<i className="fas fa-plus"></i>
		</button>
	);
};
