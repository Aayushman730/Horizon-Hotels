import { useEffect, useState } from "react";
import { getHotelById } from "../services/hotelDetailsApi";

function useHotelDetails(id) {

    const [hotel, setHotel] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        loadHotel();

    }, [id]);

    async function loadHotel() {

        try {

            const data = await getHotelById(id);

            setHotel(data.data);

        }

        catch {

            setError("Unable to load hotel.");

        }

        finally {

            setLoading(false);

        }

    }

    return {

        hotel,

        loading,

        error

    };

}

export default useHotelDetails;