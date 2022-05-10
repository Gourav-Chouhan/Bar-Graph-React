import React from "react";

function Bar(props) {
	const { height, value, order, color } = props;
	// color array with 20 colors

	return (
		<div
			className="bar"
			style={{
				backgroundColor: color,
				height: `${height}%`,
				width: "30px",
				order: order,
			}}
		>
			<div className="x-label-values">{value}</div>
		</div>
	);
}

export default Bar;
