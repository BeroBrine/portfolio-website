import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import useCustomRoutes from "./hooks/CustomRoutes";
import { IRoute } from "./hooks/Interfaces";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Cursor from "./components/Cursor";

function App() {
	const customRoute = useCustomRoutes();
	return (
		<div>
			<Routes>
				{customRoute.map((elem: IRoute) => {
					return (
						<Route key={elem.key} path={elem.path} element={<elem.element />} />
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
