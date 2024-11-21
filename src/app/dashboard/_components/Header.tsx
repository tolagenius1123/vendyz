import { NotificationsIcon, SettingsIcon } from "@/assets/images";
import Image from "next/image";
import MobileSideBar from "./MobileSideBar";

const Header = () => {
	return (
		<div className="h-[15%] bg-[#FAFAFA] px-6 flex justify-between items-center">
			<div className="flex items-center gap-5">
				<MobileSideBar />
				<h1 className="font-medium text-xl md:text-2xl">Overview</h1>
			</div>
			<div className="flex items-center gap-4">
				<Image
					src={SettingsIcon}
					alt="settings_icon"
					className="cursor-pointer"
				/>
				<Image
					src={NotificationsIcon}
					alt="notifications_icon"
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Header;
