/* Npm import */

import React from 'react';
import PropTypes from 'prop-types';

/* Local import */

/* Code */

const Product = ({ name, price, img }) => (
  <div className="product">
    <img className="product-img" src={img} alt="ProductImage" />
    <h3 className="product-name">{name}</h3>
    <p className="product-price">{price}€</p>
    <button type="button" className="product-buy-button">Buy</button>
  </div>
);

/* PropTypes */

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

/* Export */

export default Product;
