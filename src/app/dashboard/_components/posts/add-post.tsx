"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { VendyzIcon } from "@/assets/icons";
import CustomButton from "@/components/CustomButton";
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "@/components/ui/dialog";
import { addPost } from "@/config/actions/post-actions";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { startLoading, stopLoading } from "@/redux/slices/loadingSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

type AddPostProps = {
	isModalOpen?: boolean;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AddPost = ({ isModalOpen, setIsModalOpen }: AddPostProps) => {
	const { toast } = useToast();
	const isLoading = useAppSelector((state) => state.loading.isLoading);
	const dispatch = useAppDispatch();

	const schema = z.object({
		title: z.string().min(1, { message: "Title is required!" }),
		description: z.string().min(1, { message: "Description is required!" }),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: any) => {
		dispatch(startLoading());
		const payload = {
			title: data.title,
			body: data.description,
		};

		try {
			const res = await addPost(payload);
			if (res.status === 201) {
				setIsModalOpen(false);
				dispatch(stopLoading());
				toast({
					variant: "success",
					description: "Post added successfully",
				});
			}
		} catch (error) {
			setIsModalOpen(false);
			dispatch(stopLoading());
			toast({
				variant: "destructive",
				description: "An error occured! please try again later",
			});
		}
	};

	return (
		<DialogContent className="sm:max-w-[425px] p-4">
			<DialogHeader>
				<DialogTitle className="text-center text-xl md:text-2xl font-normal">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-full space-y-4"
					>
						<div className="flex justify-center mb-2">
							<Image src={VendyzIcon} alt="logo" priority />
						</div>
						<h2 className="text-center text-lg md:text-xl font-semibold">
							Create a Post
						</h2>
						<div className="mt-2 flex flex-col gap-1">
							<label
								htmlFor="title"
								className="text-customBlue text-left text-[16px] font-medium"
							>
								Title
							</label>
							<input
								{...register("title")}
								name="title"
								type="text"
								placeholder="Enter here"
								className="text-sm rounded-lg h-[40px] border border-customBlue px-3 md:px-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customBlue"
							/>
							{errors.title && (
								<p className="text-sm text-left text-red-500">
									{errors.title.message as string}
								</p>
							)}
						</div>
						<div className="mt-2 flex flex-col gap-1">
							<label
								htmlFor="description"
								className="text-customBlue text-[16px] text-left font-medium"
							>
								Description
							</label>
							<textarea
								{...register("description")}
								name="description"
								id="description"
								placeholder="Enter here..."
								rows={4}
								cols={2}
								className="bg-transparent text-sm rounded-lg border border-customBlue p-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customBlue resize-none"
							></textarea>
							{errors.description && (
								<p className="text-sm text-left text-red-500">
									{errors.description.message as string}
								</p>
							)}
						</div>
						<div className="mt-4 flex items-center justify-center">
							<div className="flex items-center gap-4">
								<CustomButton
									btnContent={
										isLoading ? "Saving..." : "Submit"
									}
									btnStyles="bg-customBlue border-none text-sm text-white rounded-lg cursor-pointer py-2 px-6"
									btnType="submit"
								/>
								<DialogClose>
									<div className="bg-customBlue text-sm text-white rounded-lg cursor-pointer py-2 px-6">
										Cancel
									</div>
								</DialogClose>
							</div>
						</div>
					</form>
				</DialogTitle>
			</DialogHeader>
		</DialogContent>
	);
};

export default AddPost;
