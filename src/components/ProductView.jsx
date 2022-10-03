import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';

import { addItem } from '../redux/shopping-cart/cartItemsSlice';
import { remove } from '../redux/product-modal/productModalSlice';

import Button from './Button';

import numberWithCommas from '../utils/numberWithCommas';

const ProductView = (props) => {
	const dispatch = useDispatch();

	let product = props.product;

	if (product === undefined)
		product = {
			title: '',
			price: '',
			colors: [],
			size: [],
		};

	const [previewImg, setPreviewImg] = useState(product.image01);

	const [descriptionExpand, setDescriptionExpand] = useState(false);

	const [color, setColor] = useState(undefined);

	const [size, setSize] = useState(undefined);

	const [quantity, setQuantity] = useState(1);

	const [valiColor, setValiColor] = useState('');

	const [valiSize, setValiSize] = useState('');

	const updateQuantity = (type) => {
		if (type === 'plus') {
			setQuantity(quantity + 1);
		} else {
			setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
		}
	};

	useEffect(() => {
		setPreviewImg(product.image01);
		setQuantity(1);
		setColor(undefined);
		setSize(undefined);
	}, [product]);

	//validate
	const checkValidate = () => {
		if (color === undefined && size === undefined) {
			setValiColor('Please select a color');
			setValiSize('Please select a size');
			return false;
		}

		if (color !== undefined && size === undefined) {
			setValiColor('');
			setValiSize('Please select a size');
			return false;
		}

		if (color === undefined && size !== undefined) {
			setValiSize('');
			setValiColor('Please select a color');
			return false;
		}

		setValiColor('');
		setValiSize('');
		return true;
	};

	const addToCart = () => {
		if (checkValidate()) {
			let newItem = {
				slug: product.slug,
				color: color,
				size: size,
				price: product.price,
				quantity: quantity,
			};
			if (dispatch(addItem(newItem))) {
				console.log(newItem);
				alert('Added to cart');
			} else {
				alert('Failed to add to cart');
			}
		}
	};

	const goToCart = () => {
		if (checkValidate()) {
			let newItem = {
				slug: product.slug,
				color: color,
				size: size,
				price: product.price,
				quantity: quantity,
			};
			if (dispatch(addItem(newItem))) {
				dispatch(remove());
				props.history.push('/cart');
			} else {
				alert('Fail');
			}
		}
	};

	return (
		<div className="product">
			<div className="product__images">
				<div className="product__images__list">
					<div
						className="product__images__list__item"
						onClick={() => setPreviewImg(product.image01)}
					>
						<img src={product.image01} alt="" />
					</div>
					<div
						className="product__images__list__item"
						onClick={() => setPreviewImg(product.image02)}
					>
						<img src={product.image02} alt="" />
					</div>
				</div>
				<div className="product__images__main">
					<img src={previewImg} alt="" />
				</div>
				<div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
					<div className="product-description__title">Product Details</div>
					<div
						className="product-description__content"
						dangerouslySetInnerHTML={{ __html: product.description }}
					></div>
					<div className="product-description__toggle">
						<>
							{descriptionExpand === true ? (
								<Button
									size="sm"
									icon="bx bx-chevrons-up"
									animate={true}
									onClick={() => setDescriptionExpand(!descriptionExpand)}
								>
									Hide away
								</Button>
							) : (
								<Button
									size="sm"
									icon="bx bx-chevrons-down"
									animate={true}
									onClick={() => setDescriptionExpand(!descriptionExpand)}
								>
									Show more
								</Button>
							)}
						</>
					</div>
				</div>
			</div>
			<div className="product__info">
				<h1 className="product__info__title">{product.title}</h1>
				<div className="product__info__item">
					<span className="product__info__item__price">
						{numberWithCommas(product.price)}
						{product.currency}
					</span>
				</div>

				<div className="product__info__item">
					<div className="product__info__item__title">Colors</div>
					<div className="product__info__item__list">
						{product.colors.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									color === item ? 'active' : ''
								}`}
								onClick={() => setColor(item)}
							>
								<div className={`circle bg-${item}`}></div>
							</div>
						))}
					</div>
					<label htmlFor="">{valiColor}</label>
				</div>

				<div className="product__info__item">
					<div className="product__info__item__title">Sizes</div>
					<div className="product__info__item__list">
						{product.size.map((item, index) => (
							<div
								className={`product__info__item__list__item ${
									size === item ? 'active' : ''
								}`}
								key={index}
								onClick={() => setSize(item)}
							>
								<div className="product__info__item__list__item__size">
									{item}
								</div>
							</div>
						))}
					</div>
					<label htmlFor="">{valiSize}</label>
				</div>

				<div className="product__info__item">
					<div className="product__info__item__title">Quantity</div>
					<div className="product__info__item__quantity">
						<div
							className="product__info__item__quantity__btn"
							onClick={() => updateQuantity('minus')}
						>
							<i className="bx bx-minus"></i>
						</div>
						<div className="product__info__item__quantity__input">{quantity}</div>
						<div
							className="product__info__item__quantity__btn"
							onClick={() => updateQuantity('plus')}
						>
							<i className="bx bx-plus"></i>
						</div>
					</div>
				</div>

				<div className="product__info__item">
					<Button
						size="sm"
						icon="bx bx-shopping-bag"
						animate={true}
						onClick={() => addToCart()}
					>
						Add to cart
					</Button>
					<Button
						size="sm"
						icon="bx bx-cart"
						animate={true}
						onClick={() => goToCart()}
					>
						Buy now
					</Button>
				</div>
			</div>
			<div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
				<div className="product-description__title">Product Details</div>
				<div
					className="product-description__content"
					dangerouslySetInnerHTML={{ __html: product.description }}
				></div>
				<div className="product-description__toggle">
					<>
						{descriptionExpand === true ? (
							<Button
								size="sm"
								icon="bx bx-chevrons-up"
								animate={true}
								onClick={() => setDescriptionExpand(!descriptionExpand)}
							>
								Hide away
							</Button>
						) : (
							<Button
								size="sm"
								icon="bx bx-chevrons-down"
								animate={true}
								onClick={() => setDescriptionExpand(!descriptionExpand)}
							>
								Show more
							</Button>
						)}
					</>
				</div>
			</div>
		</div>
	);
};

ProductView.propTypes = {
	product: PropTypes.object,
};

export default withRouter(ProductView);
