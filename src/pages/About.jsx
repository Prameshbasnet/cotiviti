import Header from "../Components/Header";
import { CiTimer } from "react-icons/ci"
import { FaRegLightbulb } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import Footer from "../Components/Footer";

const About = () => {
	return (
		<div>
			<Header />
			{/* Know us Better */}
			<div className="bg-blue-800 py-[90px]">
				<div className="mx-[200px] text-center">
					<h1 className="text-[50px] text-white mt-[80px]">Know us Better</h1>
					<p className="text-pink-600">
						Personal and professional development of our people
					</p>
				</div>
			</div>
			{/* Who we are */}
			<section className=" bg-slate-200">
				<div className="mx-[200px] py-6 mb-6">
					<h1 className="text-center text-[25px] py-8 text-blue-700">
						Who we are
					</h1>
					<p className="text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						aliquam voluptatibus incidunt consequatur ea, aspernatur quo
						delectus beatae sunt doloribus fuga deleniti culpa eos fugiat
						necessitatibus repellat animi et nemo!
					</p>
					<p className="text-center">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
						dolorem et facere libero reiciendis dignissimos ex accusamus
						deleniti dicta rerum doloremque non quibusdam, velit ea. Libero odit
						iusto consequatur totam!
					</p>
					<ul className="list-disc my-5">
						<li>Employee growth and development</li>
						<li>Work culture/environment</li>
						<li>Team work-Collaboration</li>
						<li>Process</li>
						<li>Exposure to latest and gratest Technologies and tools</li>
					</ul>
				</div>
			</section>
			{/*  Our Focus*/}
			<section className="mx-[200px] my-[100px]">
				<h1 className="text-[30px] text-center text-blue-700 my-2">
					Our Focus
				</h1>
				<p className="text-center">What we strive for</p>
				<div className="grid grid-cols-3">
					<div className="flex flex-col justify-center text-center items-center">
						<div className="text-[60px] text-pink-600 my-4">{<CiTimer />}</div>
						<p className="text-center">
							On-time and high-quality <br /> delivery
						</p>
					</div>
					<div className="flex flex-col justify-center text-center items-center">
						<div className="text-[60px] text-pink-600 my-4">
							{<FaRegLightbulb />}
						</div>
						<p className="text-center">
							Innovation and scalable <br />
							solutions
						</p>
					</div>
					<div className="flex flex-col justify-center text-center items-center">
						<div className="text-[60px] text-pink-600 my-4">{<GiBrain />}</div>
						<p className="text-center">
							Personal and professional <br /> development of our people
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
