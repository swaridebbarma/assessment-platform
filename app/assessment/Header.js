"use client"
import Filter from "./Filter";
// import { Pagination } from "@mui/material";
import Pagination from "./Pagination";
import Link from "next/link";

// import Pagination from "@mui/material/Pagination";

const Header = () => {

	return (
		<>
			<div className="header-secondpage-row">
				<div className="secondpage-row">
					<div className="secondpage-col1">
						<img src="/Logo Grp.svg" alt="Logo" />
						<div className="secondpage-col2"> QA </div>
					</div>
					<div className="clock-box">
						<div className="cercle1"></div>
						<div className="cercle2"></div>
						<div className="time">Remaining Time</div>
					</div>

					<div className="pagination">
						<Pagination />
						{/* <Pagination count={8} variant="outlined" color="primary" /> */}
					</div>
					<Link href="submitted">
						<button className="submitted-btn">Submit</button>
					</Link>
				</div>
			</div >
			<Filter />
		</>
	);
};

export default Header;


