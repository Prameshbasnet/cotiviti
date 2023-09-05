import CotivitiBuildingImg from "../assets/asset 6.png";

const WhoWeAre = () => {
	return (
		<div className="flex mx-[200px] mt-20 justify-between">
			<div className="mt-[30px]">
				<h1 className="text-[25px] my-2">Who We are</h1>
				<p className="my-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fuga. <br />
					Perspiciatis aperiam veritatis doloremque aspernatur hic ut, quibusdam <br />
					ratione odio necessitatibus nesciunt. Quod odit sequi eius autem sed,
					minus debitis?
				</p>
				<button className="flex text-center border border-blue-900 p-2 text-blue-900 hover:text-white hover:bg-pink-400 transition-all duration-2000 ease-out">Learn More</button>
			</div>
			<div>
                <img src={CotivitiBuildingImg} alt="cotivitibuildingImage"
                className="h-"/>
			</div>
		</div>
	);
};

export default WhoWeAre;
