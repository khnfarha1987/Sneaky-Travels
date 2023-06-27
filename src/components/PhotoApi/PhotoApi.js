import React, { Component } from "react";
import axios from "axios";

class PhotosApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photosData: null,
			error: null,
		};
	}

	componentDidMount() {
		// Call the function to fetch photos data
		this.fetchPhotosData();
	}

	fetchPhotosData() {
		const unsplashAccessKey = "EeoX0Pcez5PdkZXwdwVITojX4P0-DkIUkRVa69Jr3Hk";
		const { city } = this.props;
		const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
			city
		)}&client_id=${unsplashAccessKey}`;

		axios
			.get(url)
			.then((response) => {
				this.setState({ photosData: response.data.results });
			})
			.catch((error) => {
				this.setState({ error: "Error retrieving photos data." });
			});
	}

	render() {
		const { photosData, error } = this.state;

		if (error) {
			return <div>{error}</div>;
		}

		if (!photosData) {
			return <div>Loading...</div>;
		}

		// Display photos data
		const photoElements = photosData.map((photo, index) => (
			<img key={index} src={photo.urls.small} alt={`Photo ${index + 1}`} />
		));

		return (
			<div>
				<h2>Photos of {this.props.city}</h2>
				<div>{photoElements}</div>
			</div>
		);
	}
}

export default PhotosApi;
