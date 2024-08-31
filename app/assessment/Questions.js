import "./Questions.css";

const Questions = () => {

    return (
        <>
            <div className="questions-box">
                <div className="box">
                    <div className="col-box1">Question 1</div>
                    <div className="col-box2">Score +10</div>
                </div>
                <div className="Questions-col1">
                    <p className="Q">Which of the following committees recommended inclusion of fundamental duties ?</p>
                    <p className="options">Tarapore Committee </p>
                    <p className="options">Radha Krishnan Committee </p>
                    <p className="options">Swaran Singh Committee  </p>
                    <p className="options">Balwantrai Mehta Committee  </p>
                </div>
            </div>
        </>
    );
};

export default Questions;