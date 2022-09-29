import React from 'react';

import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';

import heroSliderData from '../assets/fake-data/hero-slider';

const Home = () => {
	return (
		<Helmet title="Home">
			<HeroSlider data={heroSliderData} control={true} auto={true} timeOut={8000} />
		</Helmet>
	);
};

export default Home;
