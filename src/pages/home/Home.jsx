import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./Home.scss";
const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="home__container">
				<Navbar />
				<div className="widgets">
					<Widget />
				</div>
			</div>
		</div>
	);
};

export default Home;
