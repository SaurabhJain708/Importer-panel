"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader, Tag, Clock, Info } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
// Define the Cat type directly in this file
interface Cat {
  _id: string;
  name: string;
  description?: string;
  coverImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function CategoriesShowcase() {
  const [categories, setCategories] = useState<Array<Cat>>();
  const [isLoading, setIsLoading] = useState(true);
  // Use window.location instead of Next.js router
  
  useEffect(() => {
    const getCat = async () => {
      try {
        setIsLoading(true);
        const data = await fetch("/api/user/get-categories");
        const result = await data.json();
        const resultArr = Array.isArray(result.data)
          ? result.data
          : [result.data];
        console.log(resultArr);
        setCategories(resultArr);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCat();
  }, []);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleCategoryClick = (category: Cat) => {
    window.location.href = `/v2/category/${category._id}`;
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
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Explore Categories
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our wide range of product categories tailored to meet your needs
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center">
              <Loader className="animate-spin w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Loading categories...</p>
            </div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {categories?.map((category) => (
              <motion.div
                key={category._id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
              >
                <Card
                  className="overflow-hidden h-full pt-0 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={category.coverImage || "/api/placeholder/400/200"}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 m-3">
                      <div className="bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>Category</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-0">
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.name}
                    </CardTitle>
                    {category.description && (
                      <CardDescription className="line-clamp-2 text-gray-600 dark:text-gray-300 mt-2">
                        {category.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  
                  <CardContent className="pt-2">
                    {!category.description && (
                      <div className="flex items-center text-gray-500 dark:text-gray-400 gap-2">
                        <Info className="w-4 h-4" />
                        <span className="text-sm">No description available</span>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="text-xs border-t border-gray-100 dark:border-gray-700 pt-4 text-gray-500 dark:text-gray-400">
                    <div className="grid grid-cols-2 w-full gap-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Created: {formatDate(category.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <Clock className="w-3 h-3" />
                        <span>Updated: {formatDate(category.updatedAt)}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
            
            {categories?.length === 0 && (
              <div className="col-span-full text-center py-12">
                <Info className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">No categories found</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Please check back later or contact an administrator.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}