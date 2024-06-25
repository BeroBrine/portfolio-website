import { useRef } from "react";
import Magnetic from "../Magnetic";
import { useNavigate } from "react-router-dom";

const Project = () => {
	const ref = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const handleClick = () => {
		window.open("https://github.com/BeroBrine/pawn.js", "_blank")?.focus();
	};

	const navi = () => {
		console.log("huh");
		navigate("/");
	};

	return (
		<div className="bg-black flex flex-col h-screen overflow-x-hidden">
			<div className="p-8 text-xl flex flex-col ">
				<span
					onClick={navi}
					className="justify-left text-white  font-jetBrains font-semibold p-5"
				>
					[Home]
				</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<Magnetic>
					<span
						onClick={handleClick}
						ref={ref}
						className="text-yellow-300 flex flex-col font-jetBrains p-3 text-3xl text-center font-semibold cursor-pointer"
					>
						Pawn.js
						<span className="font-semibold justify-center flex text-center text-sm text-yellow-300 font-jetBrains">
							(Click to open the Github Repo)
						</span>
					</span>
				</Magnetic>
				<p className="font-jetBrains font-semibold text-white p-16">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
					semper ante. Maecenas eget rhoncus urna. Sed sodales cursus leo,
					varius blandit dolor varius sit amet. Aenean ullamcorper at dolor
					lacinia luctus. Nullam imperdiet augue a condimentum iaculis. Duis et
					venenatis odio. Nulla finibus accumsan lectus ut congue. Nam ac
					bibendum orci, varius fringilla ante. Aenean vulputate diam id purus
					ullamcorper, quis vehicula tellus tempor. Donec dignissim risus ut
					felis lacinia, nec tempus felis maximus. Sed ut semper orci. Phasellus
					dictum vestibulum nisl nec consequat. Sed sit amet turpis vitae urna
					cursus venenatis. Sed pulvinar, mi a euismod hendrerit, felis augue
					mollis nibh, quis sollicitudin massa nisi non metus. Cras sollicitudin
					ligula vel ligula fringilla, non ultrices tortor interdum. Mauris
					dictum lacus nulla, non bibendum neque feugiat sed. Morbi arcu neque,
					auctor vel leo sit amet, tempus finibus augue. Aenean dictum placerat
					tortor, in fringilla eros vulputate vel. Praesent et semper mi.
					Quisque vehicula vulputate turpis id euismod. Aliquam ut molestie
					diam, sit amet vulputate augue. Pellentesque egestas eleifend libero,
					et tempus lectus. Aliquam in orci nec purus congue pellentesque in
					vitae ipsum. Aenean congue orci vitae arcu tincidunt condimentum.
					Morbi vel nulla pulvinar, pharetra felis ac, lacinia metus. Donec leo
					metus, viverra sollicitudin sapien et, egestas egestas nunc. Maecenas
					nec leo in sem ullamcorper finibus a quis risus. Praesent laoreet
					metus eget odio fermentum placerat. Phasellus rhoncus orci vitae
					convallis congue. Nunc dictum felis in sem pharetra, nec dictum lorem
					varius. Integer non lacinia dolor. Aliquam lobortis eget urna at
					placerat. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Etiam libero nisi, molestie vitae
					consequat eu, accumsan vel nunc. Integer et tellus eget neque molestie
					pulvinar fringilla at diam. Ut nec ullamcorper felis. Morbi risus
					nisl, elementum vitae ante in, euismod suscipit magna. In iaculis,
					nunc eu convallis ultrices, purus dui mattis leo, eu pharetra lorem
					ipsum quis diam. Fusce molestie convallis faucibus. Integer eleifend
					ipsum nec dignissim eleifend. Vestibulum scelerisque diam justo, sed
					dictum dolor fermentum ac. Quisque egestas libero semper, lacinia nunc
					ac, viverra enim. Duis vitae condimentum mi. Pellentesque non velit
					finibus, tempor risus interdum, finibus velit.
				</p>
			</div>
		</div>
	);
};

export default Project;
