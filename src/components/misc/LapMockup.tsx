import terminalHello from "../assets/myPics/terminal.mp4";

const LapMockup = () => {
	return (
		<div className="relative px-2 py-2 h-screen">
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen">
				<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[208px] aspect-[1.55/1] sm:h-[336px] md:h-[464px]">
					<div className="rounded-lg overflow-hidden h-full bg-white dark:bg-gray-800">
						<video src={terminalHello} autoPlay></video>
					</div>
				</div>
				<div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] sm:h-[19px] md:h-[21px] w-[calc(322px+12%)] sm:w-[calc(521px+12%)] md:w-[calc(719px+12%)]">
					<div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl h-[5px] sm:h-[6.5px] md:h-[8px] w-[56px] md:w-[96px]  bg-gray-800"></div>
				</div>
			</div>
		</div>
	);
};
export default LapMockup;
