import "./Submission.css";
import Link from "next/link";

const Submission = () => {
    return (
        <>
            <div className="submission-box1">
                <div className="tick">
                    <img src="/Group 32.svg" alt="Logo" />
                </div>
                <div className="submission-box2">
                    <h1 >Successfully Sumbitted</h1>
                    <h2 >Thank you for completing the test! </h2>
                    <p >Review your results and keep practicing.
                        Great job and keep up the hard work!</p>
                </div>
                <Link href="Score">
                    <button className="Score-btn">Check Your Score</button>
                </Link>

            </div>
        </>
    );
};

export default Submission;