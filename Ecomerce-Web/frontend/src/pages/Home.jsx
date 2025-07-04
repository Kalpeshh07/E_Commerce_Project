import React, { useEffect } from "react";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";
import "../comp_css/Slider.css";
import Atta from "../picture/Atta_and_dals.avif";
import Beauty from "../picture/Beauty_and_personal_care.avif";
import Cleaning from "../picture/Cleaning_essentials.avif";
import Home_essentials from "../picture/Home_essentials.avif";
import kids_fashion from "../picture/kids_fashion.avif";
import Kitchen_must_haves from "../picture/Kitchen_must_haves.avif";
import Laptops_and_Tablets from "../picture/Laptops_and_Tablets.avif";
import men_fashion from "../picture/men_fashion.avif";
import Oil_and_ghee from "../picture/Oil_and_ghee.avif";
import Smart_Televisions from "../picture/Smart_Televisions.avif";

const Home = () => {
  const navigate = useNavigate();
  
  const categoryItems = [
    { image: Atta, name: "Atta & Dals" },
    { image: Beauty, name: "Beauty & Personal Care" },
    { image: Cleaning, name: "Cleaning Essentials" },
    { image: Home_essentials, name: "Home Essentials" },
    { image: kids_fashion, name: "Kids Fashion" },
    { image: Kitchen_must_haves, name: "Kitchen Must-Haves" },
    { image: Laptops_and_Tablets, name: "Laptops & Tablets" },
    { image: men_fashion, name: "Men's Fashion" },
    { image: Oil_and_ghee, name: "Oil & Ghee" },
    { image: Smart_Televisions, name: "Smart Televisions" },
  ];

  const slideImages = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691935239_Freedom_Finds.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691950461_Handloom_Sarees_in_Colors_of_India.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691612739_Aaj_Ki_Deals_Desktop.jpg?im=Resize=(1680,320)",
  ];
  
  const bannerDeals = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691773740_Paytm_Wallet_1240x209.jpg?im=Resize=(1241,195)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691435554_MobiKwik_1240x209.jpg?im=Resize=(1241,195)",
  ];
  
  useEffect(() => {
    document.title = 'Ecommerse | Home Page';
    return () => { 
      document.title = 'Ecommerse App';
    };
  }, []); 

  const handleCategoryClick = () => {
    navigate("/product");
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <Slider images={slideImages} interval={4000} />
      </section>

      <section className="deals-section">
        <h2 className="section-title">Today's Special Deals</h2>
        <div className="ImageFixed">
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1691749079_Aaj_Ki_Deals.jpg?im=Resize=(1240,150)"
            alt="Special Deals"
          />
        </div>
      </section>

      <section className="payment-offers">
        <h2 className="section-title">Payment Offers</h2>
        <Slider images={bannerDeals} interval={5000} />
      </section>

      <section className="categories-section">
        <h2 className="section-title">Shop By Category</h2>
        <div className="cardbox">
          {categoryItems.map((item, index) => (
            <div key={index} className="category-item" onClick={handleCategoryClick}>
              <img src={item.image} alt={item.name} />
              <p className="category-name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
