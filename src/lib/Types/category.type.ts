export interface Cat {
  _id: string;
  name: string;
  description?: string;
  coverImage?: string;
  parentCategory?: string; // for nested categories
  createdAt: Date;
  updatedAt: Date;
}
