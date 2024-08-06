import Image from 'next/image';

const Header = () => {
	return (
		<div className="header-row">
			<div className="header-col1">
				<Image src="/Logo Grp.svg" alt="Logo" width={56} height={36} />
			</div>
			<div className="col2"> QA </div>
			
		</div>
	);
};

export default Header;
