import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const Slideshow = () => {
	//Array of Images
	const images = [
		"/Image1.jpeg",
		"/Image2.jpeg",
		"/Image3.jpeg",
		"/Image4.jpeg",
		"/Image5.jpeg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ display: "none"}}>
			</div>
		),
		nextArrow: (
			<div style={{ display: "none"}}>
			</div>
		),
	};
	return (

			<Zoom {...zoomInProperties} >
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-96">
						<img
							className="w-full h-full object-cover rounded-md md:rounded-r-none md:rounded-l-lg shadow-xl"
							src={each}
						/>
					</div>
				))}
			</Zoom>
	);
};

export default Slideshow;