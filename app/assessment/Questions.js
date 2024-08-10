import "./Questions.css";

const Questions = () => {

    return (
        <>
            <div className="questions-box">
                <div className="Questions-row1">
                    <div className="col-box1">Question 1</div>
                    <div className="col-box2">Score +1</div>
                    <div className="Questions-col1">
                        <p className="Q">Which of the following committees recommended inclusion of fundamental duties ?</p>
                        <ul className="options">
                            <li>Tarapore Committee </li>
                            <li>Radha Krishnan Committee </li>
                            <li>Swaran Singh Committee  </li>
                            <li>Balwantrai Mehta Committee  </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Questions;