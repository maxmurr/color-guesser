import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('');
	const [choices, setChoices] = useState<string[]>([]);
	const [wrongAnser, setWrongAnswer] = useState(false);

	const generateRandomHex = () => {
		let output = '';
		for (let i = 0; i < 6; ++i) {
			output += Math.floor(Math.random() * 16).toString(16);
		}
		return `#${output}`;
	};

	const generateColor = () => {
		const actualColor = generateRandomHex();
		setColor(actualColor);
		setChoices(
			[actualColor, generateRandomHex(), generateRandomHex()].sort(
				() => 0.5 - Math.random()
			)
		);
	};

	useEffect(() => {
		// TODO : Generate random hex #xxxxxx
		generateColor();
	}, []);

	const handleClick = (choice: string) => {
		if (choice === color) {
			setWrongAnswer(false);
			generateColor();
		} else {
			setWrongAnswer(true);
		}
	};

	return (
		<div className="App">
			<div className="cols">
				<div className="guess-me" style={{ background: color }}></div>
				{choices.map((choice) => (
					<button onClick={() => handleClick(choice)} key={choice}>
						{choice}
					</button>
				))}
			</div>
			<div className="answer">
				{wrongAnser ? (
					<div id="wrong">Wrong answer!</div>
				) : (
					<div id="right">Correct answer!</div>
				)}
			</div>
		</div>
	);
}

export default App;
