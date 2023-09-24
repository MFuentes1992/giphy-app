export const getGifBySearch = async (term: string) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=S6V7U3T39uEXykp3T7yb0jQQnBrDNjmZ&q=${term}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
	const raw = await fetch(url);
	return raw;
};
