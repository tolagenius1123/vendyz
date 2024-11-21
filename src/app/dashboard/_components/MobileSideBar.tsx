"use client";
import {
	DisputesIcon,
	NotificationsIcon,
	OrdersIcon,
	OverviewIcon,
	TransactionsIcon,
	VendyzIcon,
} from "@/assets/icons";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { usePathname } from "next/navigation";

export default function MobileSideBar() {
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
		<Sheet>
			<SheetTrigger>
				<MenuIcon className="md:hidden" />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>
						<div className="mt-4 w-full flex justify-center items-center p-4">
							<Image src={VendyzIcon} alt="vendyz_icon" />
						</div>
					</SheetTitle>
					<SheetDescription>
						<span className="mt-2 w-full flex flex-col gap-1">
							{routes.map((route) => (
								<SidebarLink
									key={route.href}
									href={route.href}
									label={route.label}
									icon={route.icon}
									isActive={pathname === route.href}
								/>
							))}
						</span>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
