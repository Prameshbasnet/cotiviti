import About from "./pages/About";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Solutions from "./pages/Solutions";


const App = () => {
  return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/contactUs" element={<ContactUs />} />
					<Route path="/solutions" element={<Solutions />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App