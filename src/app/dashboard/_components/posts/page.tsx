"use client";
import { useEffect } from "react";
import { DataTable } from "./data-table";
import { TailSpin } from "react-loader-spinner";
import { Posts, columns } from "./column";
import { getPosts } from "@/config/actions/post-actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { startLoading, stopLoading } from "@/redux/slices/loadingSlice";
import { useToast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { setPosts } from "@/redux/slices/postSlice";
import { RootState } from "@/redux/store";

export default function PostsTable() {
	const posts: Posts[] = useSelector((state: RootState) => state.posts.posts);
	const { toast } = useToast();
	const isLoading = useAppSelector((state) => state.loading.isLoading);
	const dispatch = useAppDispatch();

	// const postsData = [
	// 	{
	// 		userId: 1,
	// 		id: 1,
	// 		title: "Jumanji",
	// 		body: "The rise of the jungle and the barbarians eating human flesh in the mist of the wilderness",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 2,
	// 		title: "The rise of AI",
	// 		body: "The rise of the jungle and the barbarians eating human flesh in the mist of the wilderness",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 3,
	// 		title: "Fast and Furious",
	// 		body: "The rise of the jungle and the barbarians eating human flesh in the mist of the wilderness",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 4,
	// 		title: "Test Account",
	// 		body: "The rise of the jungle and the barbarians eating human flesh in the mist of the wilderness",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 5,
	// 		title: "Legend of Zoro",
	// 		body: "The rise of the jungle and the barbarians eating human flesh in the mist of the wilderness",
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 6,
	// 		title: "The Last Sumarai",
	// 		body: "The rise of the jungle and the barbarians eating human flesh in the mist of the wilderness",
	// 	},
	// ];

	const fetchPosts = async () => {
		dispatch(startLoading());
		try {
			const data = await getPosts();
			dispatch(setPosts(data));
			dispatch(stopLoading());
		} catch (error) {
			console.log(error);
			dispatch(stopLoading());
			toast({
				variant: "destructive",
				description: "An error occured! please try again later",
			});
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-around mt-20">
					<TailSpin color="#5271FF" height="70px" width="70px" />
				</div>
			) : (
				<div className="bg-white">
					<DataTable columns={columns} data={posts} />
				</div>
			)}
		</>
	);
}
