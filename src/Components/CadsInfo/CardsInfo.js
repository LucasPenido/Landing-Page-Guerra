import React from 'react';
import { Card, CardDeck, Image } from 'react-bootstrap';
import './CardsInfo.css';
import iconEmprestimo from '../../Icons/emprestimo.png';
import iconPreco from '../../Icons/price.png';

const CardsInfo = () => {
	return (
		<CardDeck className='mt-3'>
			<Card>
				<Image src={iconEmprestimo} className='icon' />
				<Card.Title>Empréstimo</Card.Title>
				<Card.Body>
					Realizamos empréstimos para lhe ajudar na compra do seu carro.
				</Card.Body>
			</Card>
			<Card>
				<Image src={iconPreco} className='icon' />
				<Card.Title>Melhor Preço</Card.Title>
				<Card.Body>
					Nós temos os melhores preços do mercado para lhe oferecer.
				</Card.Body>
			</Card>
		</CardDeck>
	);
};

export default CardsInfo;
