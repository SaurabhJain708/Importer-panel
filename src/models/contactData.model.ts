import mongoose, { Document, Model } from "mongoose";

export interface Cdata extends Document {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  website?: string; // optional
  productsOrServices: string;
  message?: string; // optional extra message
  createdAt: Date;
  updatedAt: Date;
}

const cdataSchema = new mongoose.Schema<Cdata>(
    {
      name: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      website: {
        type: String,
      },
      productsOrServices: {
        type: String,
        required: true,
      },
      message: {
        type: String,
      },
    },
    {
      timestamps: true, // handles createdAt and updatedAt automatically
    }
  );

 export const ContactData:Model<Cdata> = mongoose.models.ContactData || mongoose.model<Cdata>("ContactData",cdataSchema)