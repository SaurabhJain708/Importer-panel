"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Loader, ShoppingCart, Tag, Package, Clock, Eye, Heart } from "lucide-react";
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

// Define the product item type
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
  category: string;
  vendor?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function ProductsShowcase() {
  const [products, setProducts] = useState<Array<Product>>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedView, setSelectedView] = useState<'grid' | 'list'>('grid');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Get category ID from URL - using URLSearchParams instead of useParams
  const getCategoryId = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const pathParts = url.pathname.split('/');
      return pathParts[pathParts.length - 1];
    }
    return '';
  };

  const cate = getCategoryId();
  console.log("Category ID:", cate);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(`/api/user/get-items/${cate}`);
        const result = await data.json();
        const resultArr = Array.isArray(result.data)
          ? result.data
          : [result.data];
        console.log(resultArr);
        setProducts(resultArr);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [cate]);

  const formatDate = (date: Date) => {
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
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Get stock status badge
  const getStockBadge = (product: Product) => {
    if (!product.isInStock) {
      return <Badge variant="destructive" className="text-xs font-medium px-2 py-1">Out of Stock</Badge>;
    }
    if (product.stock && product.stock < 10) {
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs font-medium px-2 py-1">
          Only {product.stock} left
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs font-medium px-2 py-1">
        In Stock
      </Badge>
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

  const handleAddToCart = (productId: string) => {
    console.log(`Adding product ${productId} to cart`);
    // Implement your cart functionality here
  };

  const handleProductClick = (productId: string) => {
    window.location.href = `/product/${productId}`;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:flex md:justify-between md:items-end"
        >
          <div>
            <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Products
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Browse our collection of premium products
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <Button 
              variant={selectedView === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedView('grid')}
              className="rounded-l-md rounded-r-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </Button>
            <Button 
              variant={selectedView === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedView('list')}
              className="rounded-r-md rounded-l-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </Button>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center">
              <Loader className="animate-spin w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Loading products...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!products || products.length === 0 || products[0] === null) && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-8 mb-6">
              <Package className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-gray-800 dark:text-gray-200">No products found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md text-lg">
              There are no products available in this category at the moment.
            </p>
            <Button onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        )}

        {/* Grid View */}
        {!isLoading && products && products.length > 0 && products[0] !== null && selectedView === 'grid' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product._id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
                onMouseEnter={() => setHoveredProduct(product._id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl">
                  <div 
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => handleProductClick(product._id)}
                  >
                    <img
                      src={product.coverImage || "/api/placeholder/400/300"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 m-3">
                      {getStockBadge(product)}
                    </div>
                    
                    {hoveredProduct === product._id && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button variant="secondary" size="sm" className="mr-2" onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product._id);
                        }}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="secondary" size="sm" onClick={(e) => {
                          e.stopPropagation();
                          console.log('Add to wishlist');
                        }}>
                          <Heart className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle 
                        className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => handleProductClick(product._id)}
                      >
                        {product.name}
                      </CardTitle>
                      {product.price !== undefined && (
                        <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                          {formatCurrency(product.price, product.currency)}
                        </span>
                      )}
                    </div>
                    {product.description && (
                      <CardDescription className="line-clamp-2 mt-2 text-gray-600 dark:text-gray-300">
                        {product.description}
                      </CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="pb-2">
                    <div className="flex flex-col space-y-3">
                      {product.rating !== undefined && (
                        <div className="flex items-center">
                          {renderRating(product.rating)}
                        </div>
                      )}
                      {product.vendor && (
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Tag className="h-4 w-4 mr-2" />
                          {product.vendor}
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{formatDate(product.createdAt)}</span>
                    </div>
                    <Button
                      size="sm"
                      variant={product.isInStock ? "default" : "outline"}
                      disabled={!product.isInStock}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (product.isInStock) {
                          handleAddToCart(product._id);
                        }
                      }}
                      className={product.isInStock ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-gray-400"}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      {product.isInStock ? "Add to Cart" : "Sold Out"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* List View */}
        {!isLoading && products && products.length > 0 && products[0] !== null && selectedView === 'list' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            {products.map((product) => (
              <motion.div
                key={product._id}
                variants={itemVariants}
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.2 }
                }}
                className="w-full"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="flex flex-col md:flex-row">
                    <div 
                      className="relative h-64 md:h-auto md:w-1/4 overflow-hidden cursor-pointer"
                      onClick={() => handleProductClick(product._id)}
                    >
                      <img
                        src={product.coverImage || "/api/placeholder/400/300"}
                        alt={product.name}
                        className="w-full h-full object-cover md:object-contain transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 m-3">
                        {getStockBadge(product)}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 
                          className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={() => handleProductClick(product._id)}
                        >
                          {product.name}
                        </h3>
                        {product.price !== undefined && (
                          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                            {formatCurrency(product.price, product.currency)}
                          </span>
                        )}
                      </div>
                      
                      {product.description && (
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                          {product.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-4 mt-auto">
                        {product.rating !== undefined && (
                          <div className="flex items-center">
                            {renderRating(product.rating)}
                          </div>
                        )}
                        
                        {product.vendor && (
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Tag className="h-4 w-4 mr-2" />
                            {product.vendor}
                          </div>
                        )}
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{formatDate(product.createdAt)}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4 space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleProductClick(product._id)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        
                        <Button
                          size="sm"
                          variant={product.isInStock ? "default" : "outline"}
                          disabled={!product.isInStock}
                          onClick={() => {
                            if (product.isInStock) {
                              handleAddToCart(product._id);
                            }
                          }}
                          className={product.isInStock ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-gray-400"}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          {product.isInStock ? "Add to Cart" : "Sold Out"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}