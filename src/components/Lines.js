import React from "react";

function Lines(props) {
	const { number } = props;
	return (
		<div>
			<div className="y-numbers">{number}</div>
		</div>
	);
}

export default Lines;
