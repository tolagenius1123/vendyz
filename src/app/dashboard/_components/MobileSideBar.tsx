"use client";
import {
	DisputesIcon,
	MoreIcon,
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
import { CircleUserRound, MenuIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { usePathname, useRouter } from "next/navigation";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { startLoading, stopLoading } from "@/redux/slices/loadingSlice";
import CustomButton from "@/components/CustomButton";

export default function MobileSideBar() {
	const pathname = usePathname();
	const [user, setUser] = useState<{ email: string; password: string }>();
	const router = useRouter();
	const isLoading = useAppSelector((state) => state.loading.isLoading);
	const dispatch = useAppDispatch();

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

	const logOutUser = () => {
		dispatch(startLoading());
		localStorage.removeItem("user");

		setTimeout(() => {
			dispatch(stopLoading());
			router.push("/");
		}, 3000);
	};

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			const userInfo = JSON.parse(user);
			console.log(userInfo);
			setUser(userInfo);
		}
	}, []);

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
					<div className="px-4 py-3 border-t border-b flex justify-between items-center mb-5">
						<div className="flex gap-2 items-center">
							<CircleUserRound className="h-8 w-8" />
							<div className="flex flex-col">
								<p className="text-[14px] text-black font-medium">
									{user?.email?.split("@")[0]}
								</p>
								<p className="text-[#9B9697] text-[12px]">
									Admin
								</p>
							</div>
						</div>
						{/* LOGOUT */}
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Image
									src={MoreIcon}
									alt="more_icon"
									className="cursor-pointer h-6 w-6"
								/>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Dialog>
									<DialogTrigger asChild>
										<DropdownMenuLabel className="text-center cursor-pointer">
											LogOut
										</DropdownMenuLabel>
									</DialogTrigger>
									<DialogContent className="sm:max-w-[425px] text-center shadow-md">
										<DialogHeader>
											<DialogTitle className="text-center text-xl md:text-2xl">
												Are you sure you want to logout?
											</DialogTitle>
										</DialogHeader>
										<DialogFooter>
											<div className="w-full flex items-center justify-around">
												<div className="flex items-center gap-4">
													<CustomButton
														btnContent={
															isLoading
																? "Signing out..."
																: "Yes"
														}
														btnStyles="bg-customBlue border-none  text-white rounded-lg cursor-pointer py-2 px-6"
														btnType="button"
														handleSubmit={() =>
															logOutUser()
														}
													/>
													<DialogClose>
														<div className="bg-customBlue text-white rounded-lg cursor-pointer py-2 px-6">
															Cancel
														</div>
													</DialogClose>
												</div>
											</div>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
