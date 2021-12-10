import React, { useEffect, useState } from "react";
import Result from "./Result/Result";
import Selection from "./Selection/Selection";
import useDidMountEffect from "./useDidMountEffect";
import Container from "@mui/material/Container";
import "./App.css";

const API_KEY = "8700ca0c2da0f1414fa6de9a40f20dfa";

function App() {
	// Aktualnie wybrane miasto w select
	const [currentCityInput, setCurrentCityInput] = useState("poznan");
	const [currentCity, setCurrentCity] = useState();

	const url = `http://api.openweathermap.org/data/2.5/forecast?q=${currentCityInput}&appid=${API_KEY}`;

	// Zapis aktualnie wybranego miasta do currentCity
	const handleChangeCity = (e) => {
		setCurrentCityInput(e.target.value);
	};

	// Funkcja pobierająca dane z API
	const loadData = async () => {
		const data = await fetch(url);
		data.json().then((res) => setCurrentCity(res));
	};

	useEffect(() => {
		loadData();
		console.log("useEffect");
	}, []);

	useDidMountEffect(() => {
		loadData();
		console.log("component");
	}, [currentCityInput]);

	return (
		<Container>
			<Selection handleChangeCity={handleChangeCity} />
			{currentCity ? <Result data={currentCity} /> : null}
		</Container>
	);
}

export default App;
