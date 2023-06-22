import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Card = ({ card }) => {
	return (
		<div className="bg-[white] w-fit rounded-[8px] h-fit">
			<TransformWrapper>
				<TransformComponent>
					<img
						src={card.image}
						alt={card.id}
						className="h-[156px] w-[270px] rounded-[8px]"
					/>
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
};

export default Card;
