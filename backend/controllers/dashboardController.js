const Product = require("../models/Product");

//  Get Dashboard Analytics
exports.getDashboard = async (req, res) => {
  try {
    const products = await Product.find();

    const totalProducts = products.length;

    let totalInventoryValue = 0;
    let expiringSoon = 0;
    let expired = 0;
    let estimatedLoss = 0;

    const today = new Date();

    products.forEach((product) => {
      // Inventory Value
      totalInventoryValue += product.quantity * product.unitCost;

      // Days until expiry
      const daysLeft = Math.ceil(
        (new Date(product.expiryDate) - today) / (1000 * 60 * 60 * 24)
      );

      if (daysLeft < 0) {
        expired++;
        estimatedLoss += product.quantity * product.unitCost;
      } else if (daysLeft <= 7) {
        expiringSoon++;
      }
    });

    res.status(200).json({
      success: true,
      data: {
        totalProducts,
        totalInventoryValue,
        expiringSoon,
        expired,
        estimatedLoss,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard",
      error: error.message,
    });
  }
};