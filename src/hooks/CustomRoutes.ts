import { IRoute } from "./Interfaces";
import { Project, Linux } from "../components/Navbar/index";
import { HomePage, Playground } from "../components";

const useCustomRoutes = (): IRoute[] => {
	return [
		{
			key: 1,
			path: "/",
			element: HomePage,
		},

		{
			key: 2,
			path: "/projects",
			element: Project,
		},

		{
			key: 3,
			path: "/linux",
			element: Linux,
		},

		// WARN: Remember to remove this.
		{
			key: 4,
			path: "/test",
			element: Playground,
		},
	];
};

export default useCustomRoutes;
