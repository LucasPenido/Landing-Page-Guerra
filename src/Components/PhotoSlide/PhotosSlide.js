import React from 'react';
import carro1 from '../../Photos/pexels-mike-977003.jpg';
import carro2 from '../../Photos/pexels-mike-1335077.jpg';
import { Carousel, Image } from 'react-bootstrap';
import './PhotosSlide.css';

const PhotosSlide = () => {
	return (
		<Carousel controls={false} indicators={false} fade>
			<Carousel.Item>
				<Image className='img' src={carro1} alt='carro1' />
			</Carousel.Item>
			<Carousel.Item>
				<Image className='img' src={carro2} alt='carro2' />
			</Carousel.Item>
		</Carousel>
	);
};

export default PhotosSlide;
