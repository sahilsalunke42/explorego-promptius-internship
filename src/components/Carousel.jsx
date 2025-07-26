import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mockTrips } from "../utils/trips";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  // function to navigate to trip details
  const navigate = useNavigate();
  const handleTripClick = (tripId) => {
    navigate(`/trips/${tripId}`);
  };

  const places = mockTrips.map((trip) => ({
    id: trip.id,
    name: trip.destination,
    image: trip.image,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-full max-w-4xl">
      {places.map((place) => (
        <div key={place.id} className="flex justify-center p-4">
          <div className="border rounded-2xl shadow-lg bg-white flex flex-col items-center w-70 max-w-md sm:max-w-sm md:max-w-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl mx-auto gap-0">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-52 sm:h-64 object-cover rounded-t-2xl select-none"
              draggable={false}
            />
            <div className="flex-1 flex flex-col justify-between p-4 w-full">
              <h3 className="text-center text-xl font-bold text-zinc-800 mb-2 truncate">
                {place.name}
              </h3>
              <button
                onClick={() => handleTripClick(place.id)}
                className="inline-block w-full mt-3 px-0 py-2 bg-red-600 text-white rounded-lg font-semibold text-base hover:bg-red-700 transition text-center shadow"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
