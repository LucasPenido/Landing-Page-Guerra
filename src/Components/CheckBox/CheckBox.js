import React from 'react';
import { Form, Col } from 'react-bootstrap';
import './CheckBox.css';

const CheckBox = (props) => {
	return (
		<Form.Group>
			<Form.Row>
				<Form.Label>
					Informe as Marcas de Carro que mais lhe interessam:
				</Form.Label>
				{Object.keys(props.carObj).map((key) => (
					<Col key={`col-${key.toString()}`} xs='auto'>
						<Form.Check
							inline
							label={props.carObj[key]}
							value={key}
							onClick={props.onClick}
						/>
					</Col>
				))}
			</Form.Row>
		</Form.Group>
	);
};

export default CheckBox;
