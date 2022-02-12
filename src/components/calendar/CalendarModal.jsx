import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

Modal.setAppElement('#root');

const initialDate = moment().minutes(0).seconds(0).add(1, 'hours');
const finalDate = moment().clone(initialDate).add(1, 'day');

export const CalendarModal = () => {
	const [dateStart, setDateStart] = useState(initialDate.toDate());
	const [dateEnd, setDateEnd] = useState(finalDate.toDate());
	const [isOpen, setIsOpen] = useState(true);
	const [isTitleValid, setIsTitleValid] = useState(true);
	const [event, setEvent] = useState({
		title: '',
		notes: '',
		start: initialDate.toDate(),
		end: finalDate.toDate()
	});
	const { title, notes, start, end } = event;

	const handleInputChange = ({ target }) => {
		setEvent({
			...event,
			[target.name]: target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const momentStart = moment(start);
		const momentEnd = moment(end);

		if (momentStart.isSameOrAfter(momentEnd)) {
			Swal.fire('Error!', 'La fecha de fin debe de ser mayor a la fecha de inicio', 'error');
			return;
		}

		if (title.trim().length < 2) {
			setIsTitleValid(false);
			return;
		}
		console.log(event);
		setIsTitleValid(true);
		closeModal();
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const startDateChange = (e) => {
		setDateStart(e);
		setEvent({
			...event,
			start: e
		});
	};

	const endDateChange = (e) => {
		setDateEnd(e);
		setEvent({
			...event,
			end: e
		});
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			className="modal"
			overlayClassName="modal-fondo"
		>
			<h1> Nuevo evento </h1>
			<hr />
			<form className="container" onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Fecha y hora inicio</label>
					<DateTimePicker className="form-control" onChange={startDateChange} value={start} />
				</div>

				<div className="form-group">
					<label>Fecha y hora fin</label>
					<DateTimePicker className="form-control" onChange={endDateChange} value={end} minDate={dateStart} />
				</div>

				<hr />
				<div className="form-group">
					<label>Titulo y notas</label>
					<input
						type="text"
						className={`form-control ${!isTitleValid && 'is-invalid'}`}
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
						value={title}
						onChange={handleInputChange}
					/>
					<small id="emailHelp" className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group">
					<textarea
						type="text"
						className="form-control"
						placeholder="Notas"
						rows="5"
						name="notes"
						value={notes}
						onChange={handleInputChange}
					></textarea>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block mt-2">
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};
