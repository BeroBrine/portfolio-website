import { IRoute } from "./Interfaces";
import { Project, Hobbies, Linux } from "../components/Navbar/index";
import { Video } from "../components";

const useCustomRoutes = (): IRoute[] => {
	return [
		{
			key: 1,
			path: "/",
			element: Video,
		},

		{
			key: 2,
			path: "/projects",
			element: Project,
		},

		{
			key: 3,
			path: "/hobbies",
			element: Hobbies,
		},

		{
			key: 4,
			path: "/linux",
			element: Linux,
		},
	];
};

export default useCustomRoutes;
