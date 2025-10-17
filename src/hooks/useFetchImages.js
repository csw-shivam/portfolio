import { useState, useEffect } from 'react';
import { fetchImages } from '../api/unsplash';

const useFetchImages = (query) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getImages = async () => {
            setLoading(true);
            try {
                const data = await fetchImages(query);
                setImages(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getImages();
    }, [query]);

    return { images, loading, error };
};

export default useFetchImages;