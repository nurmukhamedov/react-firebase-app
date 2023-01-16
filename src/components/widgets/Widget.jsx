import Keyboard from "@mui/icons-material/KeyboardArrowUp";
import Person from "@mui/icons-material/PersonOutlined";
import Shopping from "@mui/icons-material/ShoppingCartOutlined";
import Monetization from "@mui/icons-material/MonetizationOnOutlined";
import Balance from "@mui/icons-material/AccountBalanceOutlined";
import "./Widget.scss";
const Widget = ({ type }) => {
	let data;

	const amount = 100;
	const diff = 33;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
				icon: <Person className="widget__icon widget__icon--person" />,
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all orders",
				icon: <Shopping className="widget__icon widget__icon--shopping" />,
			};
			break;
		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				icon: <Monetization className="widget__icon widget__icon--money" />,
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See all details",
				icon: <Balance className="widget__icon widget__icon--balance" />,
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="widget__left">
				<span className="widget__title">{data.title}</span>
				<span className="widget__counter">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="widget__link">{data.link}</span>
			</div>
			<div className="widget__right">
				<div className="widget__percentage widget__positive">
					<Keyboard />
					{diff}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
