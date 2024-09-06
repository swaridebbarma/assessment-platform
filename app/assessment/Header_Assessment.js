"use client"
import "./Header_Assessment..css";
// import { Pagination } from "@mui/material";
import Pagination from "./Pagination";
import Link from "next/link";
// import Pagination from "@mui/material/Pagination";

const Header = () => {

	return (
		<>
			<div className="header-assessment">
				<div className="header-assessment-row">
					<div className="header-assessment-logo">
						<img src="/Logo Grp.svg" alt="Logo" />
						<div className="qa"> QA </div>
					</div>
					{/* <Pagination count={8} variant="outlined" color="primary" /> */}
					< div className="header-assessment-pagination" >
						<Pagination />
					</div>
					<div className="line"></div>
					<div className="header-assessment-Submit">
						<Link href="submitted">
							<button className="btn" >Submit</button>
						</Link>
					</div>
				</div>
			</div >

		</>
	);
};

export default Header;


