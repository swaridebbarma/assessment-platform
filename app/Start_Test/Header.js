import Link from "next/link";
import Pagination from "@mui/material/Pagination";

import Image from 'next/image';

const Header = () => {
	return (
		<div className="secondpage-row">
			<div className="secondpage-col1">
				<Image src="/Logo Grp.svg" alt="Logo" width={56} height={36} />
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


