import "./Portal.css";
import Link from "next/link";

const Portal = () => {
    return (
        <>
            <div className="portal-main">
                <h1>MCQ Test Portal</h1>
                <div className="portal-box">
                    <div className="portal-box1">
                        <h3>Instructions</h3>
                        <p>Please read the instructions carefully before you begin:</p>
                        <ul>
                            <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                            <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                            <li>Navigation: You can navigate between questions using the &apos;Next&apos; and &apos;Previous&apos; buttons.</li>
                            <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                            <li>Submission: Once you have answered all questions, click the &apos;Submit&apos; button. You must submit before the timer runs out.</li>
                            <li>Review: After submission, you may review your answers and scores.</li>
                        </ul>
                        <p>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</p>
                        <p className="click">Click &apos;Let&apos;s Start&apos; to begin the test.</p>
                        <h4>Good Luck!</h4>
                    </div>
                    <hr />
                    <div className="portal-button">
                    <Link href="assessment">
                        <button className="portal-btn">Let&apos;s Start</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portal;
