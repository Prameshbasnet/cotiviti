import logo from "../assets/asset 0.png";

const Footer = () => {
	return (
		<div className="bg-slate-300 ">
			<div className="mx-[200px]">
				<div className="flex justify-between">
					<div className="">
						<h1 className="text-[30px] my-4">Navigation</h1>
						<div className="flex gap-20">
							<ul>
								<li className="hover:text-pink-500 cursor-pointer">About</li>
								<li className="hover:text-pink-500 cursor-pointer">
									Solutions
								</li>
								<li className="hover:text-pink-500 cursor-pointer">
									Privacy Policy
								</li>
							</ul>
							<ul>
								<li className="hover:text-pink-500 cursor-pointer">
									Current Opening
								</li>
								<li className="hover:text-pink-500 cursor-pointer">
									Drop Your CV
								</li>
								<li className="hover:text-pink-500 cursor-pointer">
									News & Events
								</li>
							</ul>
							<ul>
								<li className="hover:text-pink-500 cursor-pointer">
									Contact Us
								</li>
								<li className="hover:text-pink-500 cursor-pointer">Careers</li>
								<li className="hover:text-pink-500 cursor-pointer">
									Terms of Use
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h1 className="text-[30px] my-4">Contact Us</h1>
						<h2>Cotiviti Nepal Pvt. Ltd.</h2>
						<ul>
							<li>429 Hattisar</li>
							<li>PO Box 6058</li>
							<li>Kathmandu, Nepal</li>
							<li>Tel: +977-1-4535625</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-between my-5">
					<div>
						<p>&copy; Cotiviti Nepal Pvt. Ltd.</p>
						<p>All right reserved</p>
					</div>
					<div>
						<img src={logo} alt="logo" className="h-9" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
