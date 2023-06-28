import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotosApi = ({ city }) => {
	const [photosData, setPhotosData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchPhotosData();
	}, []);

	const fetchPhotosData = async () => {
		try {
			const unsplashAccessKey = "EeoX0Pcez5PdkZXwdwVITojX4P0-DkIUkRVa69Jr3Hk";
			const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
				city
			)}&client_id=${unsplashAccessKey}`;

			const response = await axios.get(url);
			setPhotosData(response.data.results);
			setLoading(false);
		} catch (error) {
			setError("Error retrieving photos data.");
			setLoading(false);
		}
	};

	if (loading) {
		return <div>Loading photos...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (photosData.length === 0) {
		return <div>No photos found for {city}</div>;
	}

	return (
		<div>
			<h2>Photos of {city}</h2>
			<div style={{ display: "flex", justifyContent: "center" }}>
				{photosData.map((photo, index) => (
					<img key={index} src={photo.urls.small} alt={`Photo ${index + 1}`} />
				))}
			</div>
		</div>
	);
};

export default PhotosApi;
