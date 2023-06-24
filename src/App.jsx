import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import Board from "./components/Board";
function App() {
	const [view, setView] = React.useState("grid");
	return (
		<div className="relative main m-[20px] rounded-[8px] bg-[lightgrey] p-[20px] flex flex-col gap-[20px]">
			<div className="absolute right-[20px] top-[20px] flex gap-[20px]">
				<button className="button" onClick={() => setView("grid")}>
					Grid
				</button>
				<button className="button" onClick={() => setView("board")}>
					Board
				</button>
			</div>
			{view === "grid" && <Grid />}
			{view === "board" && <Board />}
		</div>
	);
}

export default App;
