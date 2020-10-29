import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductScreen.scss';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Stars from '../components/Stars';
// import products from '../products';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${match.params.id}`);
      setProduct(res.data);
    };
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  // const product = products.find((p) => p._id === match.params.id);
  return (
    <div className='product-screen-container'>
      <Row>
        <Col className='product-screen-image-container'>
          <div>
            <img
              className='product-image'
              src={product.image}
              alt={product.name}
            />
          </div>
        </Col>
        <Col className='product-screen-details-container'>
          <h4 className='product-screen-name text-center'>{product.name}</h4>
          <p className='product-screen-description'>{product.description}</p>
          <Row>
            <Col className='product-details-left-col'>
              <Stars rating={product.rating} />
              <p className='product-ratings'>
                {product.rating} ({product.numReviews} reviews)
              </p>
              <h5 className='price'>${product.price}</h5>
            </Col>
            <Col className='product-details-right-col'>
              <div className='product-availability'>
                Status:{' '}
                <span>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <Link
                to={product.countInStock > 0 ? '/cart' : '#'}
                className='btn btn-light btn-animated btn-cart'
              >
                Add to Cart
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='home-link-container'>
            <Link to='/' className='btn btn-light btn-animated-2'>
              Back To Top Products
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
