# 🏨 Horizon Hotels

Horizon Hotels is a modern hotel booking web application developed using **React + Vite**. The application allows users to browse hotels, search by location, apply filters, sort hotels, save favourite hotels to a wishlist, and simulate a hotel booking process.

The project was developed as a frontend React project while integrating data from the provided Hotel API.

---

# Features

### Hotel Listing
- Fetches hotel data from the provided REST API using Axios.
- Displays hotel cards with image, location, price and rating.

### Search
- Search hotels by location.

### Filters
- Minimum Price Filter
- Minimum Rating Filter

### Sorting
Users can sort hotels based on:
- Price (Low to High)
- Price (High to Low)
- Rating

### Pagination
Hotels are displayed page-wise for better user experience.

### Wishlist
- Add hotels to Wishlist.
- Remove hotels from Wishlist.
- Wishlist is stored using Local Storage.

### Hotel Details
- Individual hotel page using React Router.

### Demo Checkout
A simple hotel booking page containing:
- Customer Name
- Check-in Date
- Check-out Date
- Number of Guests
- Booking Confirmation

### Error Handling
Displays proper error messages whenever API requests fail.

### Loading State
Displays loading message while fetching hotel data.

### Responsive Design
The application works across desktop and mobile devices.

---

# Technologies Used

- React
- Vite
- React Router DOM
- Axios
- CSS
- Local Storage
- JavaScript (ES6)

---

# Project Structure

```
src
│
├── assets
│   └── styles
│
├── components
│   ├── hotel
│   ├── layout
│   └── ui
│
├── hooks
│
├── pages
│   ├── Checkout
│   ├── HotelDetails
│   ├── NotFound
│   └── Wishlist
│
├── services
│
├── App.jsx
├── main.jsx
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd horizon-hotels
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

# API

The application uses the Hotel API provided for the assignment to fetch hotel data.

API requests are performed using **Axios**.

---

# Future Improvements

- User Authentication
- Real Payment Gateway
- Hotel Booking Backend
- Booking History
- Reviews and Ratings
- Advanced Search Filters
- Dark Mode

---

# Author

**Aayushman Khare**

B.Tech CSE (Data Science)

---

# License

This project is developed for educational purposes.