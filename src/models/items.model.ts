import mongoose, { Document, Schema, Model } from "mongoose";

interface Iitem extends Document {
  name: string;
  description: string;
  coverImage: string;
  supportingImages?: string[];
  rating: number;
  price?: number;
  currency?: string;
  stock?: number;
  isInStock: boolean;
  category: mongoose.Types.ObjectId;
  vendor?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const itemSchema = new Schema<Iitem>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    supportingImages: [
      {
        type: String,
      },
    ],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: "USD", // or INR
    },
    stock: {
      type: Number,
      default: 0,
    },
    isInStock: {
      type: Boolean,
      default: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: "Vendor",
    },
  },
  {
    timestamps: true,
  }
);

const Item: Model<Iitem> = mongoose.models.Item || mongoose.model<Iitem>("Item", itemSchema);

export default Item;
