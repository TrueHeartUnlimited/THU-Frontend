import React from 'react';
import PropTypes from 'prop-types';

import CartTable from './cart';

function CartPage({ products }) {
  return (
    <div>
      <CartTable products={products} />
    </div>
  );
}

CartPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      // count: PropTypes.number.isRequired,
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        // description: PropTypes.string.isRequired,
        // imageUrl: PropTypes.string.isRequired
      })
    })
  ).isRequired
};

export default CartPage;