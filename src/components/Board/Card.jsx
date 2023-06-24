import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Resizable } from "re-resizable";

const Card = ({ card }) => {
	const [height, setHeight] = useState(103);
	const [width, setWidth] = useState(182);
	return (
		<Resizable
			className="absolute bg-[white] w-fit rounded-[8px] h-fit"
			style={{ left: card.x, top: card.y }}
			size={{ width, height }}
			onResizeStop={(e, direction, ref, d) => {
				setWidth(width + d.width);
				setHeight(height + d.height);
			}}
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
		</Resizable>
	);
};

export default Card;
