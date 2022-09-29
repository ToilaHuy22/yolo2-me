import React from 'react';

import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';

import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import PolicyCard from '../components/PolicyCard';

const Home = () => {
	return (
		<Helmet title="Home">
			<HeroSlider data={heroSliderData} control={true} auto={true} timeOut={8000} />
			<Section>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{policy.map((item, index) => (
							<Link to="/policy" key={index}>
								<PolicyCard
									name={item.name}
									description={item.description}
									icon={item.icon}
								/>
							</Link>
						))}
					</Grid>
				</SectionBody>
			</Section>
		</Helmet>
	);
};

export default Home;
