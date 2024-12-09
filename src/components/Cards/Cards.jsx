import React, { useState, useEffect } from "react";
import "./Cards.css";

function Cards({ onLike }) {
  const [likedAds, setLikedAds] = useState({});
  const [ads, setAds] = useState([]);
  const [filterVisible, setFilterVisible] = useState(true);
  const [isIdealForOpen, setIsIdealForOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isSegmentOpen, setIsSegmentOpen] = useState(false);
  const [isRawmaterialOpen, setIsRawmaterialOpen] = useState(false);
  const [isPatternsOpen, setIsPatternsOpen] = useState(false);

  const toggleIdealFor = () => setIsIdealForOpen(!isIdealForOpen);
  const toggleOccasion = () => setIsOccasionOpen(!isOccasionOpen);
  const toggleWork = () => setIsWorkOpen(!isWorkOpen);
  const toggleFabric = () => setIsFabricOpen(!isFabricOpen);
  const toggleSegment = () => setIsSegmentOpen(!isSegmentOpen);
  const toggleRawmaterial = () => setIsRawmaterialOpen(!isRawmaterialOpen);
  const togglePatterns = () => setIsPatternsOpen(!isPatternsOpen);

  const handleLike = (index) => {
    const newLikedAds = { ...likedAds, [index]: !likedAds[index] };
    setLikedAds(newLikedAds);

    const likeChange = newLikedAds[index] ? 1 : -1;
    onLike(likeChange);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formattedAds = data.map((item, index) => ({
          title: item.title,
          price: `₹${item.price.toFixed(2)}`,
          image: item.image,
          location: "Online Store",
          date: "Available Now",
          featured: index % 3 === 0,
        }));
        setAds(formattedAds);
      })
      .catch((error) => console.error("Error fetching ads:", error));
  }, []);
  return (
    <div className="container">
      <div className="page-description">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          temporibus expedita voluptates porro perferendis. Aliquam, aliquid!
        </p>
      </div>
      <div className="header">
        <div className="header-left">
          <h1>3425 ITEMS</h1>
          <button
            className="toggle-filter"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            {filterVisible ? "▽ HIDE FILTER" : "▷ SHOW FILTER"}
          </button>
        </div>
         <hr className="hr"/>
        <div>
          <select className="sort-select">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className="main-content">
        {filterVisible && (
          <div className="filters">
            <div>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>CUSTOMIZABLE</span>
              </label>
            </div>

            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleIdealFor}>
                <h2>Ideal For</h2>
                <span>{isIdealForOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isIdealForOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Men</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Women</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Baby & Kids</span>
                  </label>
                </div>
              )}
            </div>

            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleOccasion}>
                <h2>OCCASION</h2>
                <span>{isOccasionOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isOccasionOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Casual Wear</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Office Wear</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Daily Essentials</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Loungewear</span>
                  </label>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleWork}>
                <h2>WORK</h2>
                <span>{isWorkOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isWorkOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Embroidery</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Printing</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Weaving</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Handcrafted</span>
                  </label>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleFabric}>
                <h2>FABRIC</h2>
                <span>{isFabricOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isFabricOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Cotton</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Silk</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Wool</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Blends</span>
                  </label>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleSegment}>
                <h2>FABRIC</h2>
                <span>{isSegmentOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isSegmentOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Ethnic Wear</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Western Wear</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Activewear</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Occasion Wear</span>
                  </label>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleIdealFor}>
                <h2>SUITABLE FOR</h2>
                <span>{isIdealForOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isIdealForOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Men</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Women</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Baby & Kids</span>
                  </label>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleRawmaterial}>
                <h2>Raw Materials</h2>
                <span>{isRawmaterialOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isRawmaterialOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Natural Fibers</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Synthetic Fibers</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Recycled Materials</span>
                  </label>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={togglePatterns}>
                <h2>Patterns</h2>
                <span>{isPatternsOpen ? "△" : "▽"}</span>
              </div>
              <p>All</p>
              {isPatternsOpen && (
                <div className="dropdown-content">
                  <button className="unselect">Unselect all</button>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Solids</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Stripes</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Checks</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Geometric</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="products">
          <div className="ads-grid">
            {ads.length > 0 ? (
              ads.map((ad, index) => (
                <div key={index} className="ad-card">
                  {ad.featured && (
                    <div className="featured-badge">New Product</div>
                  )}
                  <img src={ad.image} alt={ad.title} className="ad-image" />
                  {/* <h3 className="ad-price">{ad.price}</h3> */}
                  <h3 className="ad-title">{ad.title}</h3>
                  <p className="ad-details">
                    {ad.location} • {ad.date}
                  <span>
                  <button
                    className={`like-button ${
                      likedAds[index] ? "liked" : "not-liked"
                    }`}
                    onClick={() => handleLike(index)}
                  >
                    <i
                      className={
                        likedAds[index] ? "ri-heart-fill" : "ri-heart-line"
                      }
                    ></i>
                  </button>
                  </span>
                  </p>
                </div>
              ))
            ) : (
              <p>Loading ads...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
