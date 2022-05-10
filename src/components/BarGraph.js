import { React } from "react";
import Bar from "./Bar";
import Lines from "./Lines";

const max = (a, b) => (a > b ? a : b);

function BarGraph() {
	const n = 12;
	const nl = 8;
	let maxHeight = -Infinity;
	let lines = [];
	let heights = [];
	let bars = [];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const colors = [
		"red",
		"blue",
		"green",
		"yellow",
		"orange",
		"purple",
		"pink",
		"brown",
		"violet",
		"cyan",
		"magenta",
		"lime",
	];

	for (let i = 0; i < n; i++) {
		const height = Math.floor(Math.random() * 80 + 20);
		heights.push(height);
		maxHeight = max(height, maxHeight);
	}

	// bars[1] = bars[0];

	for (let i = 0; i < n; i++) {
		bars.push(
			<Bar
				order={i}
				height={(heights[i] / maxHeight) * 95}
				value={months[i]}
				color={colors[Math.floor(Math.random() * colors.length)]}
			/>
		); //max height will always be 95%
	}

	for (let i = 0; i < nl; i++) {
		lines.push(
			<Lines number={i ? Math.round((i * maxHeight) / (nl - 1)) : 0} />
		);
	}

	return (
		<div className="graph">
			<div className="horizontal-lines">{lines}</div>
			{bars}
		</div>
	);
}

export default BarGraph;
