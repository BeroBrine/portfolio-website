import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

interface IButton {
	id: string;
	title: string;
	className?: string;
}

const Button = ({ id, title, className }: IButton) => {
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
			className={cn(
				"text-white px-3 py-2 rounded  tracking-wider  outline-none text-xl font-semibold font-jetBrains",
				className,
			)}
		>
			{title}
		</button>
	);
};

export default Button;
