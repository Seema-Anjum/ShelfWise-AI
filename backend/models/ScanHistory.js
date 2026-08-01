import mongoose from "mongoose";

const scanHistorySchema = new mongoose.Schema(
  {
    fileName: String,
    extractedProducts: Array,
    scannedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ScanHistory", scanHistorySchema);