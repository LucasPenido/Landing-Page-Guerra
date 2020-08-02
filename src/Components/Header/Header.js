import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import logo from '../../logo/logo-vert.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<Nav href='#'>
				<Nav.Item>
					<Image src={logo} alt='Guerra Logo' className='Logo' />
				</Nav.Item>
			</Nav>
		</div>
	);
};

export default Header;
