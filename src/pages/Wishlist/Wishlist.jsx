import { useEffect, useState } from "react";

import HotelCard from "../../components/hotel/HotelCard";

function Wishlist() {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {

        const data =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        setWishlist(data);

    }, []);

    return (

        <div
            style={{
                padding: "40px"
            }}
        >

            <h1
                style={{
                    marginBottom: "30px"
                }}
            >
                Wishlist
            </h1>

            {

                wishlist.length === 0 ?

                    <h2>No Favourite Hotels</h2>

                    :

                    <div className="grid">

                        {

                            wishlist.map((hotel) => (

                                <HotelCard

                                    key={hotel.id}

                                    hotel={hotel}

                                />

                            ))

                        }

                    </div>

            }

        </div>

    );

}

export default Wishlist;