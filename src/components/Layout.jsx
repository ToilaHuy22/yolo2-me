import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import CopyRightBy from './CopyRightBy';
import ProductViewModal from './ProductViewModal';

import Routes from '../routes/Routes';

const Layout = () => {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<div>
						<Header />
						<div className="container">
							<div className="main">
								<Routes />
							</div>
						</div>
						<Footer />
						<CopyRightBy />
						<ProductViewModal />
					</div>
				)}
			/>
		</BrowserRouter>
	);
};

export default Layout;
