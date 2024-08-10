"use client"
import Link from "next/link";
import Pagination from "@mui/material/Pagination";

const Header = () => {

	return (
		<div className="header-secondpage-row">
			<div className="secondpage-row">
				<div className="secondpage-col1">
					<img src="/Logo Grp.svg" alt="Logo"  />
					<div className="secondpage-col2"> QA </div>
				</div>
				<div className="clock-box">Remaining Time </div>
				<div className="filter-box ">
					<div className="filter">FILTER
						<p className="p">Question Score</p>
					</div>
				</div>
				<div className="pagination">
					<Pagination count={10} variant="outlined" color="primary" />
				</div>
				<Link href="submitted">
					<button className="submitted-btn">Submit</button>
				</Link>
			</div>
		</div >
	);
};

export default Header;


