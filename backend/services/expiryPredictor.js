const getRiskLevel = (expiryDate) => {
  const today = new Date();

  const daysLeft = Math.ceil(
    (new Date(expiryDate) - today) /
      (1000 * 60 * 60 * 24)
  );

  if (daysLeft < 0) {
    return "Expired";
  }

  if (daysLeft <= 3) {
    return "High";
  }

  if (daysLeft <= 7) {
    return "Medium";
  }

  return "Low";
};

module.exports = {
  getRiskLevel,
};