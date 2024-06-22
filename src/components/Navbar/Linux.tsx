import LapMockup from "../LapMockup";
import Navbar from "../Navbar";


const Linux = () => {
	return (
		<div>
			<Navbar homepage={false} showByDefault={false} />
			<img
				className="absolute object-cover h-screen w-full -z-10 blur-sm"
				src="/cyberpunk_city.jpeg"
				alt="evening"
			/>
			<LapMockup />
		</div>
	);
};

export default Linux;
