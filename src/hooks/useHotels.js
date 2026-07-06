import { useEffect, useState } from "react";
import { getHotels } from "../services/hotelApi";

function useHotels(
    search = "",
    minPrice = "",
    minRating = "",
    sortBy = "",
    page = 1
) {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetchHotels();

    }, [search, minPrice, minRating, sortBy, page]);

    async function fetchHotels() {

        setLoading(true);

        try {

            const params = {

                limit: 9,

                skip: (page - 1) * 9

            };

            if (search)
                params.location = search;

            if (minPrice)
                params.min_price = minPrice;

            if (minRating)
                params.min_rating = minRating;

            if (sortBy)
                params.order_by = sortBy;

            const data = await getHotels(params);

            setHotels(data.data);

            setError("");

        }

        catch (err) {

            console.log(err);

            setError("Unable to fetch hotels");

        }

        finally {

            setLoading(false);

        }

    }

    return {

        hotels,

        loading,

        error

    };

}

export default useHotels;