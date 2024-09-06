import Header from "./Header_Assessment";
import Clock from "./Clock";
import "./Questions.css";
import Filter from "./Filter";
import Questionslist from "./Questionslist";

const Page = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="row-fast">
					<div className="col1">
						<Clock />

					</div>
					<div className="col2">
						<Filter />

					</div>
				</div>
				<div className="row-second">
					<div className="col3">
						<Questionslist />

					</div>
				</div>

			</div>


		</>
	);
};

export default Page;