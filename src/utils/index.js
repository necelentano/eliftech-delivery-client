export const cartQuantity = (arrey) => {
  return arrey.reduce((acc, item) => acc + item.quantity, 0);
};

export const cartItemSumPrice = (product) => {
  return product.price * product.quantity;
};

export const allCartPrice = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

// Primitive validation
export const validForm = (obj) => {
  let valuesValid = false;

  for (const [key, value] of Object.entries(obj)) {
    if (value && value.length > 0) {
      valuesValid = true;
    } else {
      valuesValid = false;
    }
  }

  return valuesValid;
};

export const transformCart = (cart) => {
  return cart.map((item) => ({ product: item, quantity: item.quantity }));
};

export const isLinkDisabled = (cart, slug) => {
  if (cart.length === 0) return true;
  if (cart[0]?.shop.slug === slug) {
    return true;
  } else {
    return false;
  }
};

export const orderTotalPrice = (order) => {
  return order?.products.reduce(
    (acc, product) => acc + product.product.price * product.quantity,
    0
  );
};
