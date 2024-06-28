import { RiArrowRightSLine } from "@remixicon/react";
import { RiCodeSSlashFill } from "@remixicon/react";
const Skills = () => {
	return (
		<div>
			<div className=" grid h-screen py-2 w-screen  items-center  justify-items-center bg-black grid-cols-2">
				<div className="p-2  rounded-lg w-1/2 h-1/2 bg-white flex flex-row">
					<span className="font-jetBrains text-xl flex flex-col  font-bold w-1/2">
						Languages
						<span className="font-jetBrains px-1 py-1 flex flex-row text-xl font-semibold ">
							<RiArrowRightSLine color="orange" />
							Typescript
						</span>
						<span className="font-jetBrains px-1 py-1 flex flex-row text-xl font-semibold ">
							<RiArrowRightSLine color="orange" />
							Javascript
						</span>
						<span className="font-jetBrains px-1 py-1 flex flex-row text-xl font-semibold ">
							<RiArrowRightSLine color="orange" />
							Java
						</span>
						<span className="font-jetBrains px-1 py-1 flex flex-row text-xl font-semibold ">
							<RiArrowRightSLine color="orange" />
							Bash
						</span>
					</span>
					<div className="flex w-1/2 justify-center items-center">
						<RiCodeSSlashFill size={64} />
					</div>
				</div>
				<div className="p-4  rounded-lg w-1/2 h-1/2 bg-yellow-300">hi</div>

				<div className="p-4  rounded-lg w-1/2 h-1/2 bg-yellow-300">hi</div>
				<div className="p-4  rounded-lg w-1/2 h-1/2 bg-white">hi</div>
			</div>
		</div>
	);
};

export default Skills;
