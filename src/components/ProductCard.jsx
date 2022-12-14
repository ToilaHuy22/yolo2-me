import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { set } from '../redux/product-modal/productModalSlice';

import { Link } from 'react-router-dom';

import Button from './Button';

import numberWithCommas from '../utils/numberWithCommas';

const ProductCard = (props) => {
	const dispatch = useDispatch();

	const currency = props.currency ? props.currency : '$';

	return (
		<div className="product-card">
			<Link to={`/catalog/${props.slug}`}>
				<div className="product-card__image">
					<img src={props.img01} alt="" />
					<img src={props.img02} alt="" />
				</div>
				<h3 className="product-card__name">{props.name}</h3>
				<div className="product-card__price">
					{numberWithCommas(props.price)}
					<span>{currency}</span>
					<span className="product-card__price__old">
						<del>
							{numberWithCommas(15)}
							{currency}
						</del>
					</span>
				</div>
			</Link>
			<div className="product-card__btn">
				<Button
					size="sm"
					icon="bx bx-cart"
					animate={true}
					onClick={() => dispatch(set(props.slug))}
				>
					Buy item
				</Button>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	img01: PropTypes.string.isRequired,
	img02: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
	currency: PropTypes.string,
};

export default ProductCard;
