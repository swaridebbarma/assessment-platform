import "./Portal.css";
import Link from "next/link";

const Portal = () => {
    return (
        <>
            <div className=" portal">
                <h1 >MCQ Test Portal</h1>
                <div className="portal-box">
                    <div className="portal-box1">
                        <h3>Instructions</h3>
                        <p>Please read the instructions carefully before you begin:</p>
                        <ul>
                            <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                            <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                            <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                            <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                            <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                            <li>Review: After submission, you may review your answers and scores.</li>
                        </ul>
                        <p>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</p>
                        <p className="click">Click 'Let's Start' to begin the test.
                        </p>
                        <h4>Good Luck!</h4>
                    </div>
                    <hr />
                    <Link href="Start_Test">
                        <button className="portal-btn">Let's Start</button>
                    </Link>
                </div >
            </div>
        </>
    );
};

export default Portal;
