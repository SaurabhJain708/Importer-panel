"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Loader, ShoppingCart, Tag, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

// Define the product item type based on the schema
interface Product {
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
  category: string; // This would be the ObjectId as a string
  vendor?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function ProductsShowcase() {
  const [products, setProducts] = useState<Array<Product>>();
  const {cate} = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch(`/api/user/get-items/${cate}`);
        const result = await data.json();
        const resultArr = Array.isArray(result.data) ? result.data : [result.data];
        console.log(resultArr);
        setProducts(resultArr);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (price: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  // Render star rating (1-5)
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">Products</h1>
        <p className="text-gray-500">Browse our collection of products</p>
      </motion.div>

      {/* Grid View */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {!products && (
          <div className="flex items-center justify-center col-span-full py-20">
            <Loader className="animate-spin w-6 h-6 text-blue-600" />
          </div>
        )}

        {products  &&
          products.map((product) => (
            <motion.div
              key={product?._id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full pt-0 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product?.coverImage || "/api/placeholder/400/300"}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                  />
                  {!product?.isInStock && (
                    <div className="absolute top-0 right-0 m-2">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  {product.isInStock && product.stock && product.stock < 10 && (
                    <div className="absolute top-0 right-0 m-2">
                      <Badge variant="outline" className="bg-amber-50">
                        Low Stock: {product?.stock}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    {product.price && (
                      <span className="font-bold text-lg">
                        {formatCurrency(product?.price, product?.currency)}
                      </span>
                    )}
                  </div>
                  {product.description && (
                    <CardDescription className="line-clamp-2 mt-1">
                      {product?.description}
                    </CardDescription>
                  )}
                </CardHeader>

                <CardContent className="pb-2">
                  <div className="flex flex-col space-y-2">
                    {product.rating && (
                      <div className="flex items-center">
                        {renderRating(product?.rating)}
                      </div>
                    )}
                    {product.vendor && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="h-4 w-4 mr-1" />
                        {product?.vendor}
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Added {formatDate(product?.createdAt)}
                  </span>
                  <Button
                    size="sm"
                    variant={product.isInStock ? "default" : "outline"}
                    disabled={!product?.isInStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {product?.isInStock ? "Add to Cart" : "Sold Out"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}

        {!products || products[0] === null && (
          <div className="flex flex-col items-center justify-center col-span-full py-16 text-center">
            <div className="rounded-full bg-gray-100 p-4 mb-4">
              <Tag className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-gray-500 mb-4 max-w-md">
              There are no products available at the moment.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}