import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from '../Router/api'
import "../comp_css/SingleProduct.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8080/ecom/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from the API: ", error);
        setLoading(false);
      });
  }, [productId]);

  const addProductToCart = (productid) => {
    api
      .post(
        `/ecom/cart/add-product?userId=${userid}&productId=${productid}`
      )
      .then((response) => {
        localStorage.setItem("cartid", response.data.cartId);
        alert("Product added to Cart!");
      })
      .catch((error) => {
        alert("Product already in cart!");
      });
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <>
      <h1 className="product-page-title">Product Details</h1>
      <div className="product-container">
        <div className="product-details">
          <div className="product_image">
            <img src={product.imageUrl} alt={product.name} />
          </div>

          <div className="product_details">
            <h2>{product.name}</h2>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            {product.reviews && product.reviews.length > 0 ? (
              <p>
                <strong>Rating:</strong> {product.reviews[0].rating} 
                <FontAwesomeIcon icon={faStar} style={{color: '#f39c12', marginLeft: '5px'}} />
              </p>
            ) : (
              <p><strong>Rating:</strong> No ratings yet</p>
            )}
            <p><strong>Price:</strong> ₹ {product.price}</p>

            <div>
              <button
                onClick={() => {
                  addProductToCart(product.productId);
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} style={{marginRight: '8px'}} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="counter-box">
          <h3>Ready to Checkout?</h3>
          <div>
            <button
              onClick={() => {
                navigate("/user/cart");
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} style={{marginRight: '8px'}} />
              Move To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
