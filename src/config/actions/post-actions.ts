import axios from "axios";
import { AppConfig } from "..";

export const getPosts = async () => {
	try {
		const response = await axios.get(`${AppConfig.POST_URL}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const addPost = async (payload: { title: string; body: string }) => {
	try {
		const response = await axios.post(`${AppConfig.POST_URL}`, payload);
		return response;
	} catch (error) {
		throw error;
	}
};
