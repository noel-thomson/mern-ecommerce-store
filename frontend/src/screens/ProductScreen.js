import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Stars from '../components/Stars';
import Message from '../components/Message';
import Loader from '../components/Loader';
import './ProductScreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match }) => {
  // const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div className='product-screen-container'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                  {/* <p id='cart-input'>Cart Input</p> */}
                  Status:{' '}
                  <span>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <Link
                  to={product.countInStock > 0 ? '/cart' : '#'}
                  className='btn btn-light btn-animated-slide btn-cart'
                >
                  Add to Cart
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <div className='home-link-container'>
            <Link to='/' className='btn btn-light btn-hover'>
              Back To Top Products
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;

// import products from '../products';
// const product = products.find((p) => p._id === match.params.id);

// import axios from 'axios';
// const [product, setProduct] = useState({});
// useEffect(() => {
//   const fetchProduct = async () => {
//     const res = await axios.get(`/api/products/${match.params.id}`);
//     setProduct(res.data);
//   };
//   fetchProduct();
//   // eslint-disable-next-line
// }, []);
