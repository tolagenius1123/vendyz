import axios from "axios";

export const getPosts = async () => {
	try {
		// const response = await axios.get(`${AppConfig.POST_URL}`);
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const addPost = async (payload: { title: string; body: string }) => {
	try {
		// const response = await axios.post(`${AppConfig.POST_URL}`, payload);
		const response = await axios.post(
			`https://jsonplaceholder.typicode.com/posts`,
			payload
		);
		return response;
	} catch (error) {
		throw error;
	}
};
