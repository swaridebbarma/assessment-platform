import "./Filter.css";

const Filter = () => {
    return (
        <>
            <div className="filter-box1 ">
                <div className="filter">FILTER
                    <div className="filter-col1">
                        <div className="row1">Question Score</div>
                        <div className="row2">
                            <div className="cl1">All</div>
                            <div className="cl2">10</div>
                            <div className="cl2">15</div>
                            <div className="cl2">20</div>
                        </div>
                    </div>
                    <div className="filter-col2">
                        <div className="row3">Questions Attempted</div>
                        <div className="row4">
                            <div className="cl3">All(40)</div>
                            <div className="cl4">Attempted (3)</div>
                        </div>
                        <div className="cl5">Unattempted (37)</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Filter;