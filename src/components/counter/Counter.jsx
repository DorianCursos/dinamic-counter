import { useState } from 'react';
import { StyledCounter } from './counter.styles';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const [increment, setIncrement] = useState(1);

	const counterResetDisabled = counter === 0;
	const incrementResetDisabled = increment === 1;

	return (
		<>
			<StyledCounter $counter={counter}>{counter}</StyledCounter>
			<button onClick={() => decrementCounter(counter, setCounter, increment)}>
				-{increment}
			</button>

			<button
				disabled={counterResetDisabled}
				onClick={() => resetCounter(setCounter)}
			>
				Reset
			</button>

			<button onClick={() => incrementCounter(counter, setCounter, increment)}>
				+{increment}
			</button>
			<h2>{increment}</h2>
			<button onClick={() => addOneToIncrement(increment, setIncrement)}>
				+1
			</button>
			<button
				disabled={incrementResetDisabled}
				onClick={() => resetIncrement(setIncrement)}
			>
				Reset Increment
			</button>
		</>
	);
};

const incrementCounter = (counter, setCounter, increment) => {
	setCounter(counter + increment);
};

const decrementCounter = (counter, setCounter, increment) => {
	setCounter(counter - increment);
};

const resetCounter = setCounter => {
	setCounter(0);
};

const addOneToIncrement = (increment, setIncrement) => {
	setIncrement(increment + 1);
};

const resetIncrement = setIncrement => {
	setIncrement(1);
};

export default Counter;
