import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkMode from "@mui/icons-material/DarkModeOutlined";
import FullScreen from "@mui/icons-material/FullscreenExitOutlined";
import Notification from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubble from "@mui/icons-material/ChatBubbleOutlineOutlined";
import List from "@mui/icons-material/ListAltOutlined";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar__search">
					<input
						type="text"
						placeholder="Search..."
					/>
					<SearchOutlinedIcon className="navbar__items--icon" />
				</div>
				<div className="navbar__items">
					<div className="navbar__items--item">
						<LanguageOutlinedIcon className="navbar__items--icon" />
						EngLish
					</div>
					<div className="navbar__items--item">
						<DarkMode className="navbar__items--icon" />
					</div>
					<div className="navbar__items--item">
						<FullScreen className="navbar__items--icon" />
					</div>
					<div className="navbar__items--item">
						<Notification className="navbar__items--icon" />
						<div className="navbar__items--counter">1</div>
					</div>
					<div className="navbar__items--item">
						<ChatBubble className="navbar__items--icon" />
						<div className="navbar__items--counter">1</div>
					</div>
					<div className="navbar__items--item">
						<List className="navbar__items--icon" />
					</div>
					<div className="navbar__items--item">
						<img
							src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk="
							alt="avatar"
							className="navbar__items--img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
