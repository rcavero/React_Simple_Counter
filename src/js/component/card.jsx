import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-1">
			<div className="card bg-secondary text-white text-center p-0 mt-2 mb-2">
				<div className="card-body ps-0 pe-0">
					<h2 className="number fw-bold m-0">{props.counter}</h2>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	counter: PropTypes.func
};

export default Card;
