import "./Answers.css";

const Answers = () => {
    return (
        <>
            <div className="answers-col1">
                <img className="tic" src="Group 32.svg" />
            </div>
            <div className="answers-col2">
                <img className="plus" src="Frame 237579.svg" />

            </div>
            <div className="answers-col3">
                <p className="marks">10</p>
                <p className="q">Q1</p>
            </div>
            <hr className="score-hr4" />
            <div className="answers-col1">
                <img className="tic" src="cross.svg" />
            </div>
            <div className="answers-col2">
                <img className="plus" src="Frame 237579.svg" />
                
            </div>
            <div className="answers-col3">
                <p className="marks">0</p>
                <p className="q">Q2</p>
            </div>
            <hr className="score-hr4" />
        </>
    );
};

export default Answers;