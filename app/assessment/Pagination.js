import "./Pagination.css";
const Pagination = () => {

    return (
        <>
            <img className="arrow-left" src="/left-arrow.svg" alt="left-arrow" />
            <p className="pagination-page" href="#">1</p>
            <p className="dot">...</p>
            <p className="pagination-page" href="#">2</p>
            <p className="pagination-page" href="#">3</p>
            <p className="pagination-page" href="#">4</p>
            <p className="pagination-page" href="#">5</p>
            <p className="dot">...</p>
            <p className="pagination-page" href="#">6</p>
            <p className="pagination-page" href="#">7</p>
            <p className="pagination-page" href="#">8</p>
            <img className="arrow-right" src="/right-arrow.svg" alt="right-arrow" />
        </>
    );
};

export default Pagination;