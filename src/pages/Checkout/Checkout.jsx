import { useState } from "react";

function Checkout() {

    const [booked, setBooked] = useState(false);

    return (

        <div
            style={{
                maxWidth: "600px",
                margin: "50px auto",
                padding: "30px",
                background: "#fff",
                borderRadius: "15px",
                boxShadow: "0 5px 20px rgba(0,0,0,.1)"
            }}
        >

            <h1 style={{ textAlign: "center" }}>
                Hotel Booking
            </h1>

            <input
                type="text"
                placeholder="Full Name"
                style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "20px"
                }}
            />

            <input
                type="date"
                style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "15px"
                }}
            />

            <input
                type="date"
                style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "15px"
                }}
            />

            <input
                type="number"
                placeholder="Guests"
                style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "15px"
                }}
            />

            <button

                onClick={() => setBooked(true)}

                style={{
                    width: "100%",
                    marginTop: "25px",
                    padding: "15px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer"
                }}

            >

                Confirm Booking

            </button>

            {

                booked &&

                <h2
                    style={{
                        color: "green",
                        textAlign: "center",
                        marginTop: "20px"
                    }}
                >

                    🎉 Booking Successful!

                </h2>

            }

        </div>

    );

}

export default Checkout;