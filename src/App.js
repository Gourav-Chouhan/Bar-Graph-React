import BarGraph from "./components/BarGraph";

const sleep = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), 500);
	});
};

async function bubbleSort() {
	let arrr = document.getElementsByClassName("bar");

	/*
    I tried so hard,
    and went so far,
    in the end....
    it doesn't even matter
  */

	// I tried all the react stuff I know to swap those bars, but
	// I was unable to do it in react way, still I managed to make it work by hook or by crook

	let arr = [];
	const l = arrr.length;
	for (let i = 0; i < l; i++) {
		arr.push(arrr[i]);
	}
	for (let i = 0; i < l - 1; i++) {
		for (let j = 1; j < l - i; j++) {
			if (
				parseFloat(arr[j].style.height) < parseFloat(arr[j - 1].style.height)
			) {
				await sleep();
				const temp = arr[j].style.order;
				arr[j].style.order = arr[j - 1].style.order;
				arr[j - 1].style.order = temp;
				const t2 = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = t2;
			}
		}
	}
}

function App() {
	return (
		<div className="container">
			<h1>Birthday of student</h1>
			<div className="graph-row">
				<div className="y-label">
					<div>Students</div>
				</div>
				<BarGraph />
			</div>
			<h3 className="x-label">
				Months
				<button
					onClick={(e) => {
						bubbleSort();
						e.target.disabled = true;
					}}
				>
					bubble Sort it...
				</button>
			</h3>
		</div>
	);
}

export default App;
