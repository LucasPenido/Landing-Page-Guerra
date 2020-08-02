import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.css';

const Input = (props) => {
	return (
		<Form.Group controlId={props.controlId}>
			<Form.Label>{props.labelName}</Form.Label>
			<Form.Control type={props.type} onChange={props.onChange} />
		</Form.Group>
	);
};

export default Input;
