import React from "react";
import Card from "./card.jsx";
import ClockSymbol from "./clockSymbol.jsx";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	return (
		<div className="container mt-2">
			<div className="row bg-dark justify-content-center p-0">
				<ClockSymbol />
				<Card counter={props.mcsecond} />
				<Card counter={props.mdsecond} />
				<Card counter={props.msecond} />
				<Card counter={props.csecond} />
				<Card counter={props.dsecond} />
				<Card counter={props.second} />
			</div>
		</div>
	);
};
Home.propTypes = {
	second: PropTypes.number,
	dsecond: PropTypes.number,
	csecond: PropTypes.number,
	msecond: PropTypes.number,
	mdsecond: PropTypes.number,
	mcsecond: PropTypes.number
};
export default Home;
