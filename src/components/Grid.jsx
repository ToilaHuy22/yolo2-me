import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => {
	const style = {
		gap: props.gap ? `${props.gap}px` : '0',
	};

	const col = props.col ? `grid-col-${props.col}` : '';
	const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : '';
	const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : '';

	return (
		<div className={`grid ${col} ${smCol} ${mdCol}`} style={style}>
			{props.children}
		</div>
	);
};

Grid.propTypes = {
	col: PropTypes.number.isRequired,
	smCol: PropTypes.number,
	mdCol: PropTypes.number,
	gap: PropTypes.number,
};

export default Grid;
