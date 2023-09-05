import backgroundImage from "../assets/asset 10.jpeg"; // Replace with your image path
import CircleImg from "../assets/asset 2.png"



const CorporateInitiatives = () => {
	return (
		<div>
			<div className="h-86 w-full relative text-white">
				<img
					src={backgroundImage}
					alt="backgroundimage"
					className="w-full object-cover absolute mix-blend-overlay h-[470px]"
				/>
				<div className="mx-[200px] flex justify-between">
					<div className="my-[100px]">
						<h1 className="my-6 text-[25px]">Corporate Initiatives</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Reprehenderit id inventore consequatur. Numquam incidunt sapiente
							suscipit facilis odit harum repellat dolores praesentium
							voluptatibus rem iusto, tempora aut error! Voluptatibus, quasi.
                        </p>
                        <button className="border border-white p-2 my-9">Learn More</button>
                    </div>
                    <div>
                        <img src={CircleImg} alt="" className="p-9 my-[100px] max-w-[100%] h-auto" />
                    </div>
				</div>
			</div>
		</div>
	);
};

export default CorporateInitiatives;
