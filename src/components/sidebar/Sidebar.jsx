import { Link } from "react-router-dom";

import DashBoardIcon from "@mui/icons-material/Dashboard";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InventoryIcon from "@mui/icons-material/Inventory";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import "./Sidebar.scss";
const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<Link to="/">
					<span className="sidebar__logo">Nurmukhamedov Admin</span>
				</Link>
			</div>
			<hr className="sidebar__line" />
			<div className="sidebar__center">
				<ul className="sidebar__menu">
					<p className="sidebar__menu--title">Main</p>
					<li className="sidebar__menu--item">
						<DashBoardIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Dashboard</span>
					</li>
					<p className="sidebar__menu--title">Lists</p>
					<Link to="/users">
						<li className="sidebar__menu--item">
							<PermIdentityIcon className="sidebar__menu--icon" />
							<span className="sidebar__menu--span">Users</span>
						</li>
					</Link>
					<Link to="/products">
						<li className="sidebar__menu--item">
							<InventoryIcon className="sidebar__menu--icon" />
							<span className="sidebar__menu--span">Products</span>
						</li>
					</Link>

					<li className="sidebar__menu--item">
						<TakeoutDiningOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Orders</span>
					</li>
					<li className="sidebar__menu--item">
						<LocalShippingOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Deliver</span>
					</li>
					<p className="sidebar__menu--title">Useful</p>
					<li className="sidebar__menu--item">
						<QueryStatsOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Stats</span>
					</li>
					<li className="sidebar__menu--item">
						<NotificationsActiveOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Notification</span>
					</li>
					<p className="sidebar__menu--title">Service</p>
					<li className="sidebar__menu--item">
						<SettingsSystemDaydreamOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">System Health</span>
					</li>
					<li className="sidebar__menu--item">
						<PsychologyOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Logs</span>
					</li>
					<li className="sidebar__menu--item">
						<SettingsOutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Settings</span>
					</li>
					<p className="sidebar__menu--title">User</p>
					<li className="sidebar__menu--item">
						<Person2OutlinedIcon className="sidebar__menu--icon" />
						<span className="sidebar__menu--span">Profile</span>
					</li>
					<li className="sidebar__menu--item">
						<LogoutOutlinedIcon className="sidebar__menu--icon" />
						<button className="sidebar__menu--span">Logout</button>
					</li>
				</ul>
			</div>
			<div className="sidebar__bottom">
				<div
					className="sidebar__bottom--option"
					onClick={() => dispatch({ type: "LIGHT" })}></div>
				<div
					className="sidebar__bottom--option"
					onClick={() => dispatch({ type: "DARK" })}></div>
			</div>
		</div>
	);
};

export default Sidebar;
