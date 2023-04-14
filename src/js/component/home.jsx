import React from "react";
import Nav from "./nav.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
				<Nav/>
				<Jumbotrom/>
				<br />
				<Card/>

		</div>
	);
};

export default Home;
