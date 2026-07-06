import axios from "axios";

const api = axios.create({
    baseURL: "https://demohotelsapi.pythonanywhere.com",
});

export const getHotelById = async (id) => {

    try {

        const response = await api.get(`/hotels/${id}/`);

        return response.data;

    } catch (error) {

        console.error(error);

        throw error;

    }

};