const calculateInventoryValue = (products) => {
  return products.reduce((total, product) => {
    return total + product.quantity * product.unitCost;
  }, 0);
};

module.exports = {
  calculateInventoryValue,
};