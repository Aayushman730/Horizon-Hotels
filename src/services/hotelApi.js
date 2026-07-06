import axios from "axios";

const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

const hotelApi = axios.create({
    baseURL: BASE_URL,
});

export const getHotels = async (params = {}) => {

    try {

        const response = await hotelApi.get("/hotels/", {
            params,
        });

        return response.data;

    } catch (error) {

        console.error("Error Fetching Hotels :", error);

        throw error;

    }

};