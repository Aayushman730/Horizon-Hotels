import "./HotelGrid.css";

import HotelCard from "./HotelCard";
import useHotels from "../../hooks/useHotels";

function HotelGrid({
    search,
    minPrice,
    minRating,
    sortBy,
    page,
    setPage
}) {

    const {

        hotels,
        loading,
        error

   } = useHotels(
    search,
    minPrice,
    minRating,
    sortBy,
    page
);

    if(loading)

return(

<div
style={{
padding:"80px",
textAlign:"center"
}}
>

<h2>

Loading Hotels...

</h2>

<p>

Please wait...

</p>

</div>

);
    if (error)
        return <h2>{error}</h2>;
    if(hotels.length===0)

return(

<div
style={{
padding:"80px",
textAlign:"center"
}}
>

<h1>No Hotels Found</h1>

<p>Try another location.</p>

</div>

);
    console.log("Hotels:", hotels.length);

    return (

    <>

        <section className="hotel-grid">

            <h2 className="section-title">

                Popular Hotels

            </h2>

            <div className="grid">

                {

                    hotels.map((hotel) => (

                        <HotelCard

                            key={hotel.id}

                            hotel={hotel}

                        />

                    ))

                }

            </div>

        </section>

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "50px"
            }}
        >

            <button
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
    style={{
        padding: "10px 18px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }}
>
    Previous
</button>

            <span
                style={{
                    fontSize: "20px",
                    fontWeight: "bold"
                }}
            >
                Page {page}
            </span>

            <button
    onClick={() => setPage(page + 1)}
    style={{
        padding: "10px 18px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }}
>
    Next
</button>

        </div>

    </>


        

    );

}

export default HotelGrid;