/* Npm import */

import React from 'react';

/* Local import */

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Products from 'src/components/Products';

/* Datas */

import articles from 'src/datas/articles';

/* Code */

const App = () => (
  <div>
    <Header />
    <h1>Main Content</h1>
    <Products articles={articles} />
    <Footer />
  </div>
);

/* Export */

export default App;
