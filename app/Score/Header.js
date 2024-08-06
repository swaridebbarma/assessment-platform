import Image from 'next/image';

const Header = () => {
	return (
		<div className="score-header-row">
			<div className="score-header-col1">
				<Image src="/Logo Grp.svg" alt="Logo" width={56} height={36} />
			</div>
			<div className="col2"> QA </div>
			<div className="col3"> Start Test </div>
			<div className="col4"> Score </div>



		</div>
	);
};

export default Header;
