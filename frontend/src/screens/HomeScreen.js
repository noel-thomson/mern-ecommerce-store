import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Stars from '../components/Stars';
import Message from '../components/Message';
import Loader from '../components/Loader';
import './HomeScreen.scss';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div id='Homescreen'>
      <Row>
        <Col className='text-center py-3'>
          <h2>Welcome to Pro Shop</h2>
        </Col>
      </Row>
      <h3 className='homescreen-title'>Today's Top Products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col
              key={product._id}
              className='product-col'
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <div className='product-container'>
                <h5 className='product-name'>{product.name}</h5>
                <Link to={`/product/${product._id}`}>
                  <img className='product-image' src={product.image} alt='' />
                </Link>
                <Stars rating={product.rating} />
                <p className='product-ratings'>
                  {product.rating} ({product.numReviews} reviews)
                </p>
                <h5 className='price'>${product.price}</h5>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;

// import products from '../products';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const [products, setProducts] = useState([]);
// useEffect(() => {
//   const fetchProducts = async () => {
//     const res = await axios.get('/api/products');
//     setProducts(res.data);
//   };
//   fetchProducts();
// }, []);
