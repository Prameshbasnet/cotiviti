import logo from "../assets/asset 0.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
			<div className=" bg-blue-800 fixed w-full">
				<div className="mx-[200px] flex items-center justify-between h-[90px]">
					<div>
						<img src={logo} alt="logo" className="h-[40px] items-center" />
					</div>
					<div>
						<ul className="flex gap-6 text-white">
							<Link to="/" className="hover:text-pink-400 cursor-pointer">
								Home
							</Link>
							<Link to="/about" className="hover:text-pink-400 cursor-pointer">
								About
							</Link>
							<Link
								to="/solutions"
								className="hover:text-pink-400 cursor-pointer">
								Solutions
							</Link>
							<Link
								to="/careers"
								className="hover:text-pink-400 cursor-pointer">
								Careers
							</Link>
							<Link to="/contactUs" className="hover:text-pink-400 cursor-pointer">
								Contact Us
							</Link>
						</ul>
					</div>
				</div>
			</div>
		);
};

export default Header;
