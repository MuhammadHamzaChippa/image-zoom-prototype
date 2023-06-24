import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Card = ({ card }) => {
	const [height, setHeight] = useState(103);
	const [width, setWidth] = useState(182);
	return (
		<div
			className="absolute bg-[white] w-fit rounded-[8px] h-fit"
			style={{ left: card.x, top: card.y }}
		>
			<TransformWrapper>
				<TransformComponent>
					<img
						style={{
							height: height,
							width: width,
						}}
						src={card.image}
						alt={card.id}
						className="rounded-[8px]"
					/>
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
};

export default Card;
