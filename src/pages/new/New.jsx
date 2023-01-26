import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "./New.scss";
const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");

	const handleChange = (e) => {
		setFile(e.target.files[0]);
	};
	return (
		<div className="new">
			<Sidebar />
			<div className="new__container">
				<Navbar />
				<div className="new__top">
					<h1>{title}</h1>
				</div>
				<div className="new__bottom">
					<div className="new__bottom--left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt="camera"
							className="new__bottom--leftImg"
						/>
					</div>
					<div className="new__right">
						<form className="new__right--form">
							<div className="new__right--input">
								<label htmlFor="file">
									Image: <DriveFolderUploadOutlinedIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={handleChange}
									style={{ display: "none" }}
								/>
							</div>

							{inputs.map((input) => (
								<div
									className="new__right--input"
									key={input.id}>
									<label>{input.label}</label>
									<input
										type={input.type}
										placeholder={input.placeholder}
									/>
								</div>
							))}
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
