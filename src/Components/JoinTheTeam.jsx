import { AiOutlineRight } from "react-icons/ai"
import SearchImg from "../assets/asset 1.png"


const JoinTheTeam = () => {
    return (
			<div className="text-center mx-[400px] my-8">
				<h1 className="text-[40px] text-blue-500">Join The Team</h1>
				<p>Stay Ahead!</p>
				<div>
					<ul className="text-[25px]">
						<li className="flex justify-between border-b border-pink text-center items-center text-pink-500 my-4">
							<a href="#">Associate Project Manager </a>
							<span>
								<AiOutlineRight />
							</span>
						</li>
						<li className="flex justify-between border-b border-pink text-center items-center text-pink-500 my-4">
							<a href="#">Senior Java Developer </a>
							<span>
								<AiOutlineRight />
							</span>
						</li>
						<li className="flex justify-between border-b border-pink text-center items-center text-pink-500 my-4">
							<a href="#">Senior Angular Developer </a>
							<span>
								<AiOutlineRight />
							</span>
						</li>
						<li className="flex justify-between border-b border-pink text-center items-center text-pink-500 my-4">
							<a href="#">Senior Database Administrator (Oracle) </a>
							<span>
								<AiOutlineRight />
							</span>
						</li>
						<li className="flex justify-between border-b border-pink text-center items-center text-pink-500 my-4">
							<a href="#">Associate-DBA-JD (Oracle) </a>
							<span>
								<AiOutlineRight />
							</span>
						</li>
					</ul>
				</div>
				<div>
					<img src={SearchImg} alt="search image" className="mx-auto my-7" />
					<h1 className="text-[25px]">Didnot find your preferred position?</h1>
					<p>
						We’re always looking for high performing and energetic individuals.
						If you are one, please submit your resume.
					</p>
					<div className="flex justify-center gap-4 my-10">
						<button className="border border-blue-800 p-2 text-blue-900 items-center gap-4">
							View All Jobs
						</button>
						<button className="border border-blue-800 p-2  text-blue-900 items-center">
							Drop Your CV
						</button>
					</div>
				</div>
			</div>
		);
}

export default JoinTheTeam