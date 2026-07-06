import "./HotelDetails.css";
import { useParams } from "react-router-dom";
import useHotelDetails from "../../hooks/useHotelDetails";

function HotelDetails() {

    const { id } = useParams();

    const {
        hotel,
        loading,
        error
    } = useHotelDetails(id);

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    return (
        <div className="hotel-details">

            <img
                src={hotel.thumbnail}
                alt={hotel.name}
            />

            <h1>{hotel.name}</h1>

            <h3>📍 {hotel.location}</h3>

            <h2>⭐ {hotel.rating}</h2>

            <h2>₹ {hotel.price}</h2>

            <p>{hotel.description}</p>

            <br />

            <a href="/checkout">

            <button>

            Book Now

            </button>

            </a>

        </div>
    );
}

export default HotelDetails;