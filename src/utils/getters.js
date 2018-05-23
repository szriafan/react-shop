/**
 * get Cart Items Count
 * @param state
 * @returns {number}
 */
export const getCartItemsCount = state => {
  let total = 0;
  state.cart.items.forEach(item => {
    total += parseInt(item.quantity);
  });
  return total;
}
/**
 * get sum price
 * @param state
 * @returns {*}
 */
export const getCartPriceSum = state =>
  state.cart.items.reduce((total, item) =>
    total + parseFloat(item.price) * parseInt(item.quantity),
    0
  )

/**
 * get item quantity put in the car
 * @param state
 * @param id
 * @returns {Number}
 */
export const getAddedQuantity =  (cart, id) => {
  const item = cart.find(p => p._id === id)
  if (item) {
    return parseInt(item.quantity)
  } else {
    return 0
  }
}

