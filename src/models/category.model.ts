import mongoose, { Document, Schema, Model } from "mongoose";

interface ICategory extends Document {
  name: string;
  description?: string;
  coverImage?: string;
  parentCategory?: mongoose.Types.ObjectId; // for nested categories
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true, // avoid duplicates like "T-Shirts" twice
    },
    description: {
      type: String,
    },
    coverImage: {
      type: String, // URL to category image
    },
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category", // self-reference for nested categories
    },
  },
  {
    timestamps: true,
  }
);

const Category: Model<ICategory> =
  mongoose.models.Category || mongoose.model<ICategory>("Category", categorySchema);

export default Category;
