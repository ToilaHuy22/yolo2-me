import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Button from './Button';

const HeroSlider = (props) => {
	const data = props.data;

	const timeOut = props.timeOut ? props.timeOut : 8000;

	const [activeSlider, setActiveSlider] = useState(0);

	const nextSlider = useCallback(() => {
		const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;
		setActiveSlider(index);
	}, [activeSlider, data]);

	const prevSlider = () => {
		const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1;
		setActiveSlider(index);
	};

	useEffect(() => {
		if (props.auto) {
			const slideAuto = setInterval(() => {
				nextSlider();
			}, timeOut);
			return () => {
				clearInterval(slideAuto);
			};
		}
	}, [nextSlider, timeOut, props]);

	return (
		<div className="hero-slider">
			{data.map((item, index) => (
				<HeroSliderItem key={index} item={item} active={index === activeSlider} />
			))}

			{props.control ? (
				<div className="hero-slider__control">
					<div className="hero-slider__control__item" onClick={nextSlider}>
						<i className="bx bx-chevron-left"></i>
					</div>
					<div className="hero-slider__control__item" onClick={prevSlider}>
						<i className="bx bx-chevron-right"></i>
					</div>
				</div>
			) : null}
		</div>
	);
};

HeroSlider.propTypes = {
	data: PropTypes.array.isRequired,
	control: PropTypes.bool,
	auto: PropTypes.bool,
	timeOut: PropTypes.number,
};

const HeroSliderItem = (props) => (
	<div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
		<div className="hero-slider__item__info">
			<div className={`hero-slider__item__info__title color-${props.item.color}`}>
				<span>{props.item.title}</span>
			</div>
			<div className="hero-slider__item__info__description">
				<span>{props.item.description}</span>
			</div>
			<div className="hero-slider__item__info__btn">
				<Link to={props.item.path}>
					<Button
						size="sm"
						backgroundColor={props.item.color}
						icon="bx bx-cart"
						animate={true}
					>
						see details
					</Button>
				</Link>
			</div>
		</div>
		<div className="hero-slider__item__image">
			<img src={props.item.img} alt="" />
		</div>
		<div className={`shape bg-${props.item.color}`}></div>
	</div>
);

export default HeroSlider;
