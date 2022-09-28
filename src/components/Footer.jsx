import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';

import logo from '../assets/images/Logo-2.png';

const footerAboutLinks = [
	{
		display: 'About',
		path: '/about',
	},
	{
		display: 'Contact',
		path: '/about',
	},
	{
		display: 'Recruit',
		path: '/about',
	},
	{
		display: 'News',
		path: '/about',
	},
	{
		display: 'Stores',
		path: '/about',
	},
];

const footerCustomerLinks = [
	{
		display: 'Return Policy',
		path: '/about',
	},
	{
		display: 'Warranty Policy',
		path: '/about',
	},
	{
		display: 'Refund Policy',
		path: '/about',
	},
];

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<Grid col={4} mdCol={2} smCol={1} gap={10}>
						<div className="footer__about">
							<p>
								<Link to="/">
									<img src={logo} alt="" className="footer__logo" />
								</Link>
							</p>
							<p>
								" ...Through long-term experience and dedicated research, we
								believe that by guaranteeing quality products, prices both
								reasonable and superior care will be the way to help We carry
								out our mission."
							</p>
						</div>

						<div>
							<div className="footer__title">Support Center</div>
							<div className="footer__content">
								<p>
									Contact to order <br />
									<strong>123456789</strong>
								</p>
								<p>
									Question about order <br />
									<strong>123456789</strong>
								</p>
								<p>
									Comments, complaints
									<br />
									<strong>123456789</strong>
								</p>
							</div>
						</div>
						<div>
							<div className="footer__title">About us</div>
							<div className="footer__content">
								{footerAboutLinks.map((item, index) => (
									<p key={index}>
										<Link to={item.path}>{item.display}</Link>
									</p>
								))}
							</div>
						</div>
						<div>
							<div className="footer__title">Customer care</div>
							<div className="footer__content">
								{footerCustomerLinks.map((item, index) => (
									<p key={index}>
										<Link to={item.path}>{item.display}</Link>
									</p>
								))}
							</div>
						</div>
					</Grid>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
