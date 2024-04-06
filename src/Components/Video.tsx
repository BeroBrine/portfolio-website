import GithubLogo from "./svgs/GithubLogo";

const Video = () => {
	return (
		<div id="hello">
			<video
				id="video"
				className="h-[calc(100dvh)] w-full absolute object-cover -z-10 "
				autoPlay
				loop
			>
				<source src="https://i.imgur.com/MZhukUJ.mp4" type="video/mp4" />
			</video>
			<div className="z-0  flex-col flex justify-center items-center h-screen text-white  mx-auto">
				<span className="text-6xl font-jetBrains font-semibold">
					Hi.&#128075;
				</span>
				<span className="text-6xl font-jetBrains font-semibold">
					I'm Abhishek
				</span>
				<span className="type-fruit text-6xl font-jetBrains font-semibold"></span>
				<div className="flex justify-center py-2">
					<GithubLogo className={"h-10 w-10 fill-white cursor-pointer"} />
				</div>
			</div>
			<div id="white" className="h-screen bg-secCol">
				hasdf
			</div>
		</div>
	);
};

export default Video;
