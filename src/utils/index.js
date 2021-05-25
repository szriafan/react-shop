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
 * @param id
 * @returns {Number}
 */
export const getAddedQuantity =  (id) => {
  try {
    const cart = JSON.parse(localStorage.getItem('CART')) || []
    const found = cart.find(item => item._id === id)
    if (found) {
      return parseInt(found.quantity)
    }
    return 0
  } catch(err){
    return 0
  }
}


