//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let second = 0;
let dsecond = 0;
let csecond = 0;
let msecond = 0;
let mdsecond = 0;
let mcsecond = 0;
setInterval(() => {
	console.log(second);
	ReactDOM.render(
		<Home
			second={second}
			dsecond={dsecond}
			csecond={csecond}
			msecond={msecond}
			mdsecond={mdsecond}
			mcsecond={mcsecond}
		/>,
		document.querySelector("#app")
	);
	if (second < 9) {
		second++;
	} else if (second === 9 && dsecond < 9) {
		second = 0;
		dsecond++;
	} else if (second === 9 && dsecond === 9 && csecond < 9) {
		second = 0;
		dsecond = 0;
		csecond++;
	} else if (second === 9 && dsecond === 9 && csecond === 9 && msecond < 9) {
		second = 0;
		dsecond = 0;
		csecond = 0;
		msecond++;
	} else if (
		second === 9 &&
		dsecond === 9 &&
		csecond === 9 &&
		msecond === 9 &&
		mdsecond < 9
	) {
		second = 0;
		dsecond = 0;
		csecond = 0;
		msecond = 0;
		mdsecond++;
		// } else if (second === 9 && dsecond === 9 && csecond === 9 && msecond === 9 && mdsecond === 9 && mcsecond < 9) {
	} else {
		second = 0;
		dsecond = 0;
		csecond = 0;
		msecond = 0;
		mdsecond = 0;
		mcsecond++;
	}
}, 1000);
