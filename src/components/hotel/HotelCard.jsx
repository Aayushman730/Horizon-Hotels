import "./HotelCard.css";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {

    const [liked, setLiked] = useState(false);

    useEffect(() => {

        const wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const exists = wishlist.find((item) => item.id === hotel.id);

        setLiked(!!exists);

    }, [hotel.id]);

    function toggleWishlist() {

        let wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const exists =
            wishlist.find((item) => item.id === hotel.id);

        if (exists) {

            wishlist =
                wishlist.filter((item) => item.id !== hotel.id);

            setLiked(false);

        } else {

            wishlist.push(hotel);

            setLiked(true);

        }

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

    }

    return (

        <div className="hotel-card">

            <img
                src={hotel.thumbnail}
                alt={hotel.name}
            />

            <div className="hotel-info">

                <div className="title-row">

                    <h3>{hotel.name}</h3>

                    <Heart

                        size={24}

                        onClick={toggleWishlist}

                        fill={liked ? "red" : "none"}

                        color={liked ? "red" : "black"}

                        style={{
                            cursor: "pointer"
                        }}

                    />

                </div>

                <p>📍 {hotel.location}</p>

                <p>⭐ {hotel.rating}</p>

                <h2>₹ {hotel.price}</h2>

                <div
    style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px"
    }}
>

    <Link
    to={`/hotel/${hotel.id}`}
    style={{ flex: 1 }}
>

    <button
        style={{
            width: "100%"
        }}
    >
        View Details
    </button>

</Link>

    <a
        href="/checkout"
        style={{ flex: 1 }}
    >
        <button
            style={{
                width: "100%"
            }}
        >
            Book Now
        </button>
    </a>

</div>

            </div>

        </div>

    );

}

export default HotelCard;