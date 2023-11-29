import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/signup" element={<Signup/>}/>
				<Route path="*" element={ <p>Error 404</p> }/>
			</Routes>
		</Router>
	);
}
