import React from 'react';

import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';

import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import PolicyCard from '../components/PolicyCard';
import productData from '../assets/fake-data/products';
import ProductCard from '../components/ProductCard';
import banner from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.JPG';

const Home = () => {
	return (
		<Helmet title="Home">
			{/* HeroSlider */}
			<HeroSlider data={heroSliderData} control={true} auto={true} timeOut={8000} />
			{/* End HeroSlider */}

			{/* Section PolicyCard */}
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
			{/* End Section PolicyCard */}

			{/* Section Top Selling*/}
			<Section>
				<SectionTitle>Top Selling Products In The Last Month</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{productData.getRandomProducts(4).map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								name={item.title}
								price={Number(item.price)}
								slug={item.slug}
								currency={item.currency}
							/>
						))}
					</Grid>
				</SectionBody>
			</Section>
			{/* End Section Top Selling*/}

			{/* Banner 1*/}
			<Section>
				<SectionBody>
					<Link to="/catalog">
						<img src={banner} alt="" />
					</Link>
				</SectionBody>
			</Section>
			{/* End Banner 1*/}

			{/* New Product */}
			<Section>
				<SectionTitle>new products</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{productData.getRandomProducts(8).map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								name={item.title}
								price={Number(item.price)}
								slug={item.slug}
								currency={item.currency}
							/>
						))}
					</Grid>
				</SectionBody>
			</Section>
			{/* End New Product */}

			{/* Banner 2*/}
			<Section>
				<SectionBody>
					<Link to="/catalog">
						<img src={banner2} alt="" />
					</Link>
				</SectionBody>
			</Section>
			{/* End Banner 2*/}

			{/* Popular Products */}
			<Section>
				<SectionTitle>popular products</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{productData.getRandomProducts(12).map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								name={item.title}
								price={Number(item.price)}
								slug={item.slug}
								currency={item.currency}
							/>
						))}
					</Grid>
				</SectionBody>
			</Section>
			{/* End Popular Products */}
		</Helmet>
	);
};

export default Home;
