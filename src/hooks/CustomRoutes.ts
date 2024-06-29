import { IRoute } from "./InterfacesAndEnum";
import { Project, Linux } from "../components/navbar/index";
import { HomePage } from "../components";

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
	];
};

export default useCustomRoutes;
