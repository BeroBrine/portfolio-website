import { useNavigate } from "react-router-dom";

const routeHandleClick = (e: any): void => {
	const navigate = useNavigate();
	const id = (e?.target as HTMLInputElement).id;
	navigate(`/${id}`);
};

export default routeHandleClick;
