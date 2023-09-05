import CorporateInitiatives from "../Components/CorporateInitiatives";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import JoinTheTeam from "../Components/JoinTheTeam";
import WhoWeAre from "../Components/WhoWeAre";
import WorkWithUs from "../Components/WorkWithUs";
// import WorkingPhoto from "../Components/WorkingPhoto";

const Home = () => {
	return (
		<div>
			<Header />
			<Hero />
			<WhoWeAre />
			<WorkWithUs />
			{/* <WorkingPhoto /> */}
			<JoinTheTeam />
			<CorporateInitiatives />
			<Footer />
		</div>
	);
};

export default Home;
