import "./Score.css";
import Check from "./Check";


const Score = () => {
	return (
		<div className="score-box">
			<div className="score-row1">
				<div className="score-col1-box">
					<div className="score-col1">35/40</div>
					<div className="score-col2">Your Scored</div>
				</div>
				<div className="score-row2-box">
					<div className="score-col2-box">
						<img className="score-col3" src="exclimation.svg" />
						<div className="score-col4">Unattempted: 3</div>
					</div>
					<hr className="score-hr1" />
					<div className="score-col3-box">
						<div className="score-col5">
							<img src="/Group 32.svg" alt="Logo" /></div>
						<div className="score-col6">Correct: 35</div>
					</div>
					<hr className="score-hr1" />
					<div className="score-col4-box">

						<img className="score-col7" src="cross.svg" />
						<p className="score-col8">Wrong: 2</p>
					</div>
				</div>
			</div>
			<div className="check">CHECK YOUR ANSWERS</div>
			<hr className="score-hr3" />
			< Check/>
		</div>
	);
};

export default Score;
