"use client";
import {
	DisputesIcon,
	NotificationsIcon,
	OrdersIcon,
	OverviewIcon,
	TransactionsIcon,
	UsersIcon,
	VendyzIcon,
} from "@/assets/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
	const pathname = usePathname();

	const routes = [
		{
			href: "/dashboard",
			label: "Overview",
			icon: <OverviewIcon width="20" height="20" />,
		},
		{
			href: "/dashboard/users",
			label: "Users",
			icon: <UsersIcon width="20" height="20" />,
		},
		{
			href: "/dashboard/transactions",
			label: "Transactions",
			icon: <TransactionsIcon width="20" height="20" />,
		},
		{
			href: "/dashboard/orders",
			label: "Orders",
			icon: <OrdersIcon width="20" height="20" />,
		},
		{
			href: "/dashboard/disputes",
			label: "Disputes",
			icon: <DisputesIcon width="20" height="20" />,
		},
		{
			href: "/dashboard/notifications",
			label: "Notifications",
			icon: <NotificationsIcon width="20" height="20" />,
		},
	];

	return (
		<div className="bg-[#FAFAFA] hidden md:block w-[20%] border-r">
			<div className="flex flex-col justify-between h-screen">
				<div className="">
					<div className="w-full flex justify-center items-center p-4">
						<Image src={VendyzIcon} alt="vendyz_icon" />
					</div>
					<div className="mt-2 w-full flex flex-col gap-1">
						{routes.map((route) => (
							<SidebarLink
								key={route.href}
								href={route.href}
								label={route.label}
								icon={route.icon}
								isActive={pathname === route.href}
							/>
						))}
					</div>
				</div>
				{/* <div className={cn("p-3 border-t h-[44px]")}>
					<p
						className={cn(
							"text-[16px] font-medium text-customGrey group-hover:text-customBlue"
						)}
					>
						Emmanuel
					</p>
				</div> */}
			</div>
		</div>
	);
};

export default Sidebar;
