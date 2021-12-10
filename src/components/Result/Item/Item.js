import React from "react";
import "./Item.css";

const Item = ({ weather }) => {
	const time = new Date(weather.dt * 1000).toDateString().slice(0, 10);
	return (
		<li>
			<h5>{time}</h5>
			<p>
				{weather.weather[0].main}, {weather.weather[0].description}{" "}
			</p>
		</li>
	);
};

export default Item;
