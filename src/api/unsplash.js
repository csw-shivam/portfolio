import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash API access key

export const fetchCinematicImages = async (query = 'cinematic', perPage = 10) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query,
                per_page: perPage,
                orientation: 'landscape',
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
        return [];
    }
};