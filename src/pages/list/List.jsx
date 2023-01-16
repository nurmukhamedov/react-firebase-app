import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/datatable/Datatable.jsx";
import "./List.scss";
const List = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="list__container">
				<Navbar />
				<DataTable />
			</div>
		</div>
	);
};

export default List;
