import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import SearchBar from "./components/ui/SearchBar";
import HotelGrid from "./components/hotel/HotelGrid";
import Footer from "./components/layout/Footer";

import HotelDetails from "./pages/HotelDetails/HotelDetails";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import Checkout from "./pages/Checkout/Checkout";
import { useState } from "react";

function HomePage() {

    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState("");

    const [minRating, setMinRating] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [page, setPage] = useState(1);

    return (

        <>

            <Navbar />

            <Hero />

            <SearchBar

                search={search}
                setSearch={setSearch}

                minPrice={minPrice}
                setMinPrice={setMinPrice}

                minRating={minRating}
                setMinRating={setMinRating}

                sortBy={sortBy}
                setSortBy={setSortBy}

            />

            <HotelGrid

                search={search}

                minPrice={minPrice}

                minRating={minRating}

                sortBy={sortBy}

                page={page}

                setPage={setPage}

            />

            <Footer />

        </>

    );

}

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/hotel/:id"
                element={<HotelDetails />}
            />

            <Route
                path="/wishlist"
                element={<Wishlist />}
            />

            <Route
                path="/checkout"
                element={<Checkout />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );

}

export default App;