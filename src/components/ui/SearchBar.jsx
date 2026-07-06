import "./SearchBar.css";

function SearchBar({
    search,
    setSearch,
    minPrice,
    setMinPrice,
    minRating,
    setMinRating,
    sortBy,
    setSortBy
}) {

    return (

        <section className="search-section">

            <div className="search-box">

                <div className="input-box">

                    <label>Location</label>

                    <input
                        type="text"
                        placeholder="Search City"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                <div className="input-box">

                    <label>Minimum Price</label>

                    <input
                        type="number"
                        placeholder="1000"
                        value={minPrice}
                        onChange={(e) =>
                            setMinPrice(e.target.value)
                        }
                    />

                </div>

                <div className="input-box">

                    <label>Minimum Rating</label>

                    <select
                        value={minRating}
                        onChange={(e) =>
                            setMinRating(e.target.value)
                        }
                    >

                        <option value="">
                            All
                        </option>

                        <option value="1">1+</option>

                        <option value="2">2+</option>

                        <option value="3">3+</option>

                        <option value="4">4+</option>

                        <option value="5">5</option>

                    </select>

                </div>
                <div className="input-box">

    <label>Sort By</label>

    <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
    >

        <option value="">
            Default
        </option>

        <option value="price">
            Price Low → High
        </option>

        <option value="-price">
            Price High → Low
        </option>

        <option value="-rating">
            Highest Rated
        </option>

    </select>

</div>

            </div>

        </section>

    );

}

export default SearchBar;