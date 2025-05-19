import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, id, img, price, details } = service;

  return (
    <div className="w-[600px] h-[500px] md:w-80 lg:w-96 bg-pink-200 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 hover:bg-pink-300">
      <div className="h-56 flex justify-center">
        <img src={img} className="w-full h-full rounded-md object-cover" alt={title} />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">{details}</p>
        <p className="text-lg font-semibold text-pink-700 mt-2">Starts From INR {price}</p>
        <div className="mt-4">
          <Link to={`/service/${id}`}>
            <button className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-pink-600">
              Select Options
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
