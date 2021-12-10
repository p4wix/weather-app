import React, { useState } from "react";
import Item from "./Item/Item";

import "./Result.css";

const Result = ({ data }) => {
	const date = new Date().toLocaleTimeString();
	//Mnożymy przez 1000 bo potrzebujemy milisekundy
	const sunriceTime = new Date(data.city.sunrise * 1000).toLocaleTimeString();
	const sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString();

	const { city: myCity, list: myList } = data;
	const icon_id = myList[0].weather[0].icon;

	const windDirection = (wind) => {
		if (wind > 0 && wind < 90) {
			return "NE";
		} else if (wind > 90 && wind < 180) {
			return "SE";
		} else if (wind > 180 && wind < 270) {
			return "SW";
		} else if (wind > 270 && wind < 360) {
			return "NW";
		}
	};

	//filtracja tablicy na elementy 0, 8, 16, 24, 36
	const filteredArr = myList.filter((item, idx) => idx % 8 === 2);

	return (
		<>
			<div className="result-wrap">
				<p>Local time: {date}</p>
				<p>Sunrice hour: {sunriceTime}</p>
				<p>Sunset hour: {sunsetTime}</p>
				<p>
					Today Weather: {myList[0].weather[0].main},{" "}
					{myList[0].weather[0].description}
				</p>
				<img
					src={`https://openweathermap.org/img/w/${icon_id}.png`}
					alt="weather-icon"
				/>
				<p>Wind speed: {myList[0].wind.speed}m/s</p>
				<p>Wind direction: {windDirection(myList[0].wind.deg)}</p>
				<h2>Weather for next 5 days</h2>
				<ul>
					{filteredArr.map((item) => (
						<Item key={item.dt} weather={item} />
					))}
				</ul>
			</div>
		</>
	);
};

export default Result;
