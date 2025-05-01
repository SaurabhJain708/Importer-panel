"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Cat } from "@/lib/Types/category.type";
import { useRouter } from "next/navigation";

export default function CategoriesShowcase() {
  const [categories, setCategories] = useState<Array<Cat>>();
  const router = useRouter();
  useEffect(() => {
    const getCat = async () => {
      const data = await fetch("/api/user/get-categories");
      const result = await data.json();
      const resultArr = Array.isArray(result.data)
        ? result.data
        : [result.data];
      console.log(resultArr);
      setCategories(resultArr);
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
    router.push(`/v2/category/${category._id}`);
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
        <h1 className="text-4xl font-bold mb-2">Categories</h1>
        <p className="text-gray-500">Browse our product categories</p>
      </motion.div>

      {/* Grid View */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {!categories && (
          <div className="flex items-center justify-center">
            <Loader className="animate-spin w-6 h-6 text-blue-600" />
          </div>
        )}
        {categories &&
          categories.map((category) => (
            <motion.div
              key={category._id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card
                className="overflow-hidden h-full pt-0 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={category.coverImage || "/api/placeholder/400/200"}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  {category.description && (
                    <CardDescription className="line-clamp-2">
                      {category.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardFooter className="text-xs text-gray-500">
                  <div className="flex flex-col w-full">
                    <span>Created: {formatDate(category.createdAt)}</span>
                    <span>Updated: {formatDate(category.updatedAt)}</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
