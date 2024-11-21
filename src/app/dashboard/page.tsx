"use client";
import { useState } from "react";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	NairaIcon,
	NairaIconBlack,
	RainbowIcon,
	RainbowLeftIcon,
	RainbowRightIcon,
} from "@/assets/icons";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import PostsTable from "./_components/posts/page";
import AddPost from "./_components/posts/add-post";

const Dashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);

	return (
		<div className="w-full h-full flex flex-col md:flex-row justify-between gap-10">
			<div className="w-full md:w-[70%] h-auto rounded-lg">
				{/* CARDS */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="h-[400px]">
						<div className="bg-[#F3F5FD] px-5 py-5 rounded-[20px] shadow-md">
							<p className="text-[#5C5959]">Vendyz earnings</p>
							<div className="mt-4 flex gap-1">
								<Image
									src={NairaIcon}
									alt="naira-icon"
									className="h-3 w-3"
								/>
								<p className="text-black font-medium text-2xl">
									84,310.12
								</p>
							</div>
							<div className="mt-4 flex items-center gap-4 text-sm">
								<div className="flex items-center gap-1">
									<Image src={ArrowUpIcon} alt="arrow-up" />
									<p className="text-[#449E6A]">+2.11%</p>
								</div>
								<div className="text-[#9B9697]">
									vs last 30 days
								</div>
							</div>
						</div>
						<div className="mt-4 border border-[#F0F0F0] bg-white px-5 py-5 rounded-[20px] shadow-md">
							<p className="text-[#5C5959]">Escrow balance</p>
							<div className="flex justify-between">
								<div className="flex items-center">
									<Image
										src={NairaIconBlack}
										alt="naira-icon"
										className="h-3 w-3"
									/>
									<p className="text-black font-medium text-xl">
										210,639.44
									</p>
								</div>
								<div className="mt-4 flex flex-col text-sm">
									<div className="flex items-center gap-1">
										<Image
											src={ArrowDownIcon}
											alt="arrow-up"
										/>
										<p className="text-[#449E6A]">-1.10%</p>
									</div>
									<div className="text-[#9B9697]">
										vs last 30 days
									</div>
								</div>
							</div>
						</div>
						<div className="mt-4 border border-[#F0F0F0] bg-white px-5 py-5 rounded-[20px] shadow-md">
							<p className="text-[#5C5959]">Users</p>
							<div className="flex justify-between">
								<div className="flex items-center">
									<p className="text-black font-medium text-xl">
										3,008
									</p>
								</div>
								<div className="mt-4 flex flex-col text-sm">
									<div className="flex items-center gap-1">
										<Image
											src={ArrowUpIcon}
											alt="arrow-up"
										/>
										<p className="text-[#449E6A]">+3.25%</p>
									</div>
									<div className="text-[#9B9697]">
										vs last 30 days
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="border mt-4 md:mt-0 rounded-[20px] h-auto px-5 py-5">
						<p className="text-[#5C5959]">Vendyz earnings</p>
						<div className="mt-4 flex flex-col gap-1 relative">
							<Image src={RainbowIcon} alt="rainbow-icon" />
							<div className="absolute flex flex-col gap-4 items-center top-[70px] left-[95px]">
								<p className="text-[#5C5959] font-medium">
									Disputes
								</p>
								<div className="flex items-center">
									<Image
										src={NairaIconBlack}
										alt="naira-icon"
										className="h-3 w-3"
									/>
									<p className="text-black font-medium text-xl">
										51,089
									</p>
								</div>
							</div>
						</div>
						<div className="border shadow-md border-[#F0F0F0] mt-5 flex items-center justify-between w-full p-3 rounded-xl">
							<div className="flex flex-col gap-2">
								<div className="flex items-center gap-1">
									<Image
										src={RainbowLeftIcon}
										alt="rainbow-left"
									/>
									<span className="text-[11px] mt-2 text-[#9B9697]">
										Resolved
									</span>
								</div>
								<div className="flex items-center">
									<Image
										src={NairaIconBlack}
										alt="naira-icon"
										className="h-3 w-3"
									/>
									<p className="text-black font-medium text-sm">
										51,089
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<div className="flex items-center gap-1">
									<span className="text-[11px] mt-2 text-[#9B9697]">
										Pending
									</span>
									<Image
										src={RainbowRightIcon}
										alt="rainbow-left"
									/>
								</div>
								<div className="flex items-center justify-end">
									<Image
										src={NairaIconBlack}
										alt="naira-icon"
										className="h-3 w-3"
									/>
									<p className="text-black font-medium text-sm">
										6,550
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* TABLE */}
				<div className="mt-10 border border-[#F0F0F0] rounded-[20px] h-[500px] w-full">
					<div className="w-full py-5 px-5 flex justify-between items-center">
						<p className="text-[#5C5959]">Latest Posts</p>
						<Dialog
							open={isModalOpen}
							onOpenChange={setIsModalOpen}
						>
							<DialogTrigger asChild>
								<button className="bg-[#FAFAFA] hover:bg-slate-100 rounded-[20px] text-[#5C5959] py-2 px-4 border border-[#F0F0F0] cursor-pointer shadow-sm">
									+ Add Post
								</button>
							</DialogTrigger>
							{/* ADD POST FORM */}
							<AddPost setIsModalOpen={setIsModalOpen} />
						</Dialog>
					</div>
					<PostsTable />
				</div>
			</div>
			<div className="w-full md:w-[30%] h-full border rounded-lg"></div>
		</div>
	);
};

export default Dashboard;
