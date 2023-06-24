import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Card = ({ card, size }) => {
	const cardDimension =
		(size === "small" && "h-[49px] w-[88px]") ||
		(size === "medium" && "h-[103px] w-[182px]") ||
		(size === "large" && "h-[156px] w-[270px]");
	return (
		<div className="bg-[white] w-fit rounded-[8px] h-fit">
			<TransformWrapper>
				<TransformComponent>
					<img
						src={card.image}
						alt={card.id}
						className={`${cardDimension} rounded-[8px]`}
					/>
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
};

export default Card;
