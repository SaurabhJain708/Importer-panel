interface item {
  _id: string;
  name: string;
  description: string;
  coverImage: string;
  supportingImages?: string[];
  rating: number;
  price?: number;
  currency?: string;
  stock?: number;
  isInStock: boolean;
  category: string;
  vendor?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CatType {
  _id: string;
  name: string;
  description?: string;
  coverImage?: string;
  parentCategory?: string;
  items: item[]; // for nested categories
  createdAt: Date;
  updatedAt: Date;
}
