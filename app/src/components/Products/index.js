/* Npm import */

import React from 'react';
import PropTypes from 'prop-types';

/* Local import */

import Product from 'src/components/Product';

/* Code */

const Products = ({ articles }) => (
  <main className="products">
    {articles.map(article => (
      <Product key={article.id} {...article} />
    ))}
  </main>
);

/* PropTypes */

Products.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

/* Export */

export default Products;
