import React from "react";
import "./Selection.css";

const Selection = ({ handleChangeCity }) => {
	return (
		<div className="selection-wrap">
			<select className="select-field" onChange={handleChangeCity}>
				<option value="poznan">Poznan</option>
				<option value="londyn">Londyn</option>
				<option value="havana">Havana</option>
			</select>
		</div>
	);
};

export default Selection;
