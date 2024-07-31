import Link from "next/link";
import Pagination from "@mui/material/Pagination";

const Header = () => {
	return (
		<div className="row">
			<div className="testcol1">
				<img src="/Logo Grp.svg" alt="Logo" />
			</div>
			<div className="col2"> QA </div>
			<div className="pagination">
				<Pagination count={10} variant="outlined" color="primary" />
			</div>
			<Link href="Submitted">
				<button className="submitted-btn">Submit</button>
			</Link>
		</div>
	);
};

export default Header;


