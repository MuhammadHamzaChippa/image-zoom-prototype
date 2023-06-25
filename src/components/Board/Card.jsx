import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Resizable } from "re-resizable";

const Card = ({ card }) => {
	const initialHeight = 103;
	const initialWidth = 182;
	const [height, setHeight] = useState(initialHeight);
	const [width, setWidth] = useState(initialWidth);
	const [scale, setScale] = useState({ x: 1, y: 1 });
	return (
		<Resizable
			className="absolute bg-[white] w-fit rounded-[8px] h-fit"
			style={{ left: card.x, top: card.y }}
			size={{ width, height }}
			onResizeStop={(e, direction, ref, d) => {
				const newWidth = width + d.width;
				const newHeight = height + d.height;
				setScale({ x: initialWidth / newWidth, y: initialHeight / newHeight });
				setWidth(newWidth);
				setHeight(newHeight);
			}}
		>
			<TransformWrapper>
				<TransformComponent>
					<img
						style={{
							height: height,
							width: width,
							transform: `scale(${scale.x}, ${scale.y})`,
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
