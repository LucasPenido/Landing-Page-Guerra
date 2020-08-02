import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Input from '../Input/Input';
import CheckBox from '../CheckBox/CheckBox';
import './Forms.css';

const carObj = {
	1: 'Bentley',
	2: 'Volkswagen',
	3: 'BMW',
	4: 'Porsche',
	5: 'Volvo',
	6: 'Maserati',
	7: 'Jaguar',
	8: 'Hyundai',
	9: 'Renault',
	10: 'Mitsubishi',
};

const Forms = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [carSelected, setCarSelected] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, email, phone, carSelected });
	};

	const inputHandle = (event, setState) => {
		setState(event.target.value);
	};

	const checkHandle = (event) => {
		const key = event.target.value;
		if (carSelected.hasOwnProperty(key)) {
			delete carSelected[key];
		} else {
			const temp = {
				...carSelected,
			};
			temp[key] = carObj[key];
			setCarSelected({ ...temp });
		}
	};

	return (
		<Form onSubmit={handleSubmit} className='rounded Form'>
			<Form.Group>
				<Form.Text className='Form-header'>
					Preencha os campos para que possamos lhe contactar
				</Form.Text>
			</Form.Group>
			<Input
				labelName='Nome*'
				controlId='formName'
				type='text'
				onChange={(event) => inputHandle(event, setName)}
			/>
			<Input
				labelName='Email*'
				controlId='formEmail'
				type='email'
				onChange={(event) => inputHandle(event, setEmail)}
			/>
			<Input
				labelName='Telefone*'
				controlId='formPhone'
				type='number'
				onChange={(event) => inputHandle(event, setPhone)}
			/>
			<CheckBox onClick={(event) => checkHandle(event)} carObj={carObj} />
			<Button block className='Form-button mb-2' type='submit'>
				Enviar
			</Button>
		</Form>
	);
};

export default Forms;
