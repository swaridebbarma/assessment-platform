"use client"
import Link from "next/link";
import Pagination from "@mui/material/Pagination";

import Image from 'next/image';

const Header = () => {

	return (
		<div className="header-secondpage-row">
			<div className="secondpage-row">
				<div className="secondpage-col1">
					<Image src="/Logo Grp.svg" alt="Logo" width={56} height={36} />
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
				<Link href="Submitted">
					<button className="submitted-btn">Submit</button>
				</Link>
			</div>
			{/* <div className="main-container"> */}
		</div >
	);
};

export default Header;


