import { v4 as uuid } from "uuid";
import Card from "./Card";
import "./App.css";

function App() {
	const thumbnails = [
		{
			id: uuid(),
			image: "https://app.popstack.ai/thumbnails/71ac3ecd-4d3d-41d2-b986-f1b479145287.png",
		},
		{
			id: uuid(),
			image: "https://app.popstack.ai/thumbnails/3808832c-0321-45f2-ac31-15131521f3c0.png",
		},
		{
			id: uuid(),
			image: "https://app.popstack.ai/thumbnails/996a9e5f-cf30-4b5b-9ff6-7cd7f6bc749f.png",
		},
		{
			id: uuid(),
			image: "https://app.popstack.ai/thumbnails/5fac93f8-1c94-44b3-ab90-eae861dd1d9e.png",
		},
	];
	return (
		<div className="absolute inset-[50px] rounded-[8px] bg-[lightgrey] p-[20px] flex flex-wrap gap-[10px]">
			{thumbnails.map((card) => {
				return <Card key={card.id} card={card} />;
			})}
		</div>
	);
}

export default App;
