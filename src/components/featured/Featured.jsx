import MoreVert from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardDown from "@mui/icons-material/KeyboardArrowDown";
import "./Featured.scss";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featured__top">
				<h1 className="featured__title">Total Revenue</h1>
				<MoreVert className="featured__icon" />
			</div>
			<div className="featured__bottom">
				<div className="featured__chart">
					<CircularProgressbar
						value={70}
						text="70%"
						strokeWidth={4}
					/>
				</div>
				<p className="featured__text">Total sales made today</p>
				<p className="featured__amount">$420</p>
				<p className="featured__desc">
					Previous transaction processing. Last payments may not be included
				</p>
				<div className="featured__summary">
					<div className="featured__item">
						<div className="featured__item--title">Target</div>
						<div className="featured__item--result negative">
							<KeyboardDown className="featured__icon" />
							<div className="featured__item--amount">12.4k</div>
						</div>
					</div>
					<div className="featured__item">
						<div className="featured__item--title">Last Week</div>
						<div className="featured__item--result positive">
							<KeyboardArrowUp className="featured__icon" />
							<div className="featured__item--amount">12.4k</div>
						</div>
					</div>
					<div className="featured__item">
						<div className="featured__item--title">Last Month</div>
						<div className="featured__item--result positive">
							<KeyboardArrowUp className="featured__icon" />
							<div className="featured__item--amount">12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
