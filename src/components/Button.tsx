import { useNavigate } from "react-router-dom";

interface IButton {
	id: string;
	title: string;
}

const Button = ({ id, title }: IButton) => {
	const navigate = useNavigate();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = (e?.target as HTMLInputElement).id;
		navigate(`/${id}`);
	};

	return (
		<button
			id={id}
			onClick={handleClick}
			type="button"
			className="text-white px-3 py-2 rounded  tracking-wider  outline-none text-xl font-semibold font-jetBrains"
		>
			{title}
		</button>
	);
};

export default Button;
