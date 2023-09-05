
import HeroImg from "../assets/asset 4.png"; // Import the image

const Hero = () => {
    return (
			<div className="bg-blue-800 flex pt-[80px] justify-between h-[700px]">
				<div className="mx-[200px] mt-[50px]">
					<h1 className="text-white text-[30px]">
						Growing Bigger <br /> Creating More Opportunities
                </h1>
                <div className="bg-white p-6">
                    <small>We are...</small>
                    <h1 className="text-black text-[40px]">Cotiviti Nepal Pvt. Ltd.</h1>
                    <p className="text-pink-600">(Formerly known as Verscend Technologies Pvt. Ltd.) <br />A subsidiary
                    of COTIVITI INC. (formerly known as Verscend INC)</p>
                </div>
				</div>

				<img src={HeroImg} alt="" />
			</div>
		);
};

export default Hero;
