import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import PhotosSlide from './Components/PhotoSlide/PhotosSlide';
import Forms from './Components/Forms/Forms';
import CardsInfo from './Components/CadsInfo/CardsInfo';
import Header from './Components/Header/Header';

const App = () => {
	return (
		<div>
			<Header />
			<div className='container'>
				<Row className='Row'>
					<div className='InfoView col-md-6 col-xl-7 rounded'>
						<h1>Querendo comprar carros de luxo?</h1>
						<PhotosSlide />
						<CardsInfo />
					</div>
					<div className='InfoForm col-md-6 col-xl-5 d-flex'>
						<Forms />
					</div>
				</Row>
			</div>
		</div>
	);
};

export default App;
