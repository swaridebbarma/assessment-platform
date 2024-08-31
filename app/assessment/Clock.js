import "./Clock.css";


const Clock = () => {

    return (
        <>
            <div className="clock-box">
                <div className="cercle1"></div>
                <div className="cercle2">
                    <div className="second">50 : 20</div>
                    <div className="minute">min sec</div>
                </div>
                <div className="time">Remaining Time</div>
            </div>
         

        </>

    )
}
export default Clock;


