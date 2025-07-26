import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mockTrips } from "../utils/trips";

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
  arrows: true, // using default arrows
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

const Carousel = () => (
  <Slider {...settings} className="w-full max-w-4xl">
    {places.map((place) => (
      <div key={place.id} className="flex justify-center p-4">
        <div
          className="
              border border-green-200 rounded-2xl shadow-lg bg-white flex flex-col items-center w-70 max-w-md sm:max-w-sm md:max-w-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl mx-auto"
        >
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-52 sm:h-64 object-cover rounded-t-2xl select-none"
            draggable={false}
          />
          <div className="flex-1 flex flex-col justify-between p-4 w-full">
            <h3 className="text-center text-xl font-bold text-green-800 mb-2 truncate">
              {place.name}
            </h3>
            <Link
              to={`/trip/${place.id}`}
              className="inline-block w-full mt-3 px-0 py-2 bg-green-600 text-white rounded-lg font-semibold text-base hover:bg-green-700 transition text-center shadow"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

export default Carousel;
