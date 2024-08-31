"use client"
import "./header.css";
// import { Pagination } from "@mui/material";
import Pagination from "./Pagination";
import Link from "next/link";
// import Pagination from "@mui/material/Pagination";

const Header = () => {

	return (
		<>
			<div className="header-assessment">

				<div className="assessment-row">
					<div className="assessment-col1">
						<img src="/Logo Grp.svg" alt="Logo" />
						<div className="qa"> QA </div>
					</div>

					{/* <Pagination count={8} variant="outlined" color="primary" /> */}
					< div className="assessment-col2" >
						<Pagination />
					</div>

					<div className="assessment-col3">
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


