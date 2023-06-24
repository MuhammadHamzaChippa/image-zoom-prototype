import React from "react";
import { thumbnails } from "../../data";
import Card from "./Card";
const Board = () => {
	return (
		<React.Fragment>
			{thumbnails.map((card) => {
				return <Card key={card.id} card={card}  />;
			})}
		</React.Fragment>
	);
};

export default Board;
