"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Posts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const columns: ColumnDef<Posts>[] = [
	{
		accessorKey: "id",
		header: "Id",
	},
	{
		accessorKey: "title",
		header: "Title",
		cell: ({ row }) => {
			const { title } = row.original;
			return <div className="">{`${title.slice(0, 20)}`}</div>;
		},
	},
	{
		accessorKey: "body",
		header: "Description",
		cell: ({ row }) => {
			const { body } = row.original;
			return <div className="">{`${body.slice(0, 50)}...`}</div>;
		},
	},
];
