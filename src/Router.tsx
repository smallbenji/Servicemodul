import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { Kunde } from "./pages/Kunde/Kunde";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Kunde/:KundeID" element={<Kunde />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
