import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface PostsState {
	posts: Post[];
}

const initialState: PostsState = {
	posts: [],
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<Post[]>) => {
			state.posts = action.payload;
		},
	},
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
