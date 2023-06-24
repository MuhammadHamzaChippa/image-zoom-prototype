import React, { useState } from "react";
import Card from "./Card";
import { thumbnails } from "../../data";
const Grid = () => {
	const [size, setSize] = useState("medium");
	const sizes = ["small", "medium", "large"];
	return (
		<React.Fragment>
			<div className="flex gap-[20px] justify-center">
				{sizes.map((size) => {
					return (
						<button key={size} className="button" onClick={() => setSize(size)}>
							{size.toUpperCase()}
						</button>
					);
				})}
			</div>
			<div className="flex gap-[20px]">
				{thumbnails.map((card) => {
					return <Card key={card.id} card={card} size={size} />;
				})}
			</div>
		</React.Fragment>
	);
};

export default Grid;
