import LapMockup from "../LapMockup";
import Navbar from "../Navbar";

const Linux = () => {
	return (
		<div>
			<Navbar homepage={false} showByDefault={false} />
			<div>
				<img
					className=" absolute h-screen w-full -z-10"
					src="https://png.pngtree.com/background/20230401/original/pngtree-cyberpunk-city-purple-background-picture-image_2252484.jpg"
					alt="evening"
				/>
			</div>
			<div className="backdrop-filter backdrop-blur-sm bg-opacity-10 h-screen w-full z-0 absolute"></div>
			<LapMockup />
		</div>
	);
};

export default Linux;
