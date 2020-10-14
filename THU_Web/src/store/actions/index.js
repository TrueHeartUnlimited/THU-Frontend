const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

export function addToCartMessage(product, count) {
  return buildMessage(ADD_TO_CART, { product, count });
}

export function removeFromCartMessage(productId) {
  return buildMessage(REMOVE_FROM_CART, { productId });
}

export function increaseCountMessage(productId){
  return buildMessage(INCREASE_COUNT, {productId})
}

export function decreaseCountMessage(productId){
  return buildMessage(DECREASE_COUNT, {productId})
}

function buildMessage(type, payload) {
  return { type, payload };
}

const messageHandlers = {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [INCREASE_COUNT]: increaseCount,
  [DECREASE_COUNT]: decreaseCount,
};

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type];

  if (!handler) return state;

  return handler(state, payload);
}

function addToCart(state, { product, count }) {
   const products = {
    ...state.products,
    [product.id]: { product, count }
  };

  return {
    ...state,
    products
  };
}

function removeFromCart(state, { productId }) {
  const {
    [productId]: removedProduct, // eslint-disable-line no-unused-vars
    ...products
  } = state.products;

  return {
    ...state,
    products
  };
}

function increaseCount(state, {productId}){
  let product = state.products[productId]
  product.count += 1
  return {
    ...state
  }
}

function decreaseCount(state, { productId }){
  let product = state.products[productId]
    product.count -= 1
  if(product.count < 1){
    const {
      [productId]: removedProduct,
      ...products
    } = state.products;
    return{
      ...state,
      products
    }
  }
  else{
    return {
      ...state
    }
  }
}

const initialState = {
  products:{},
};

export function cartReducer(state = initialState, action) {
  if (!action) return state;

  return handleMessage(state, action);
}