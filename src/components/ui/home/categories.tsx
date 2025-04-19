"use client"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "../button";

export default function Categories() {
      const [activeTab, setActiveTab] = useState("electronics");
    
    const categories = [
        {
          id: "electronics",
          title: "Electronics",
          description: "Premium laptops, smartphones, and gadgets from leading Chinese manufacturers",
          image: "/api/placeholder/400/300",
          products: [
            { name: "Ultra Slim Laptop", price: "$499", rating: 4.8 },
            { name: "Smart Wearable", price: "$129", rating: 4.6 },
            { name: "4K Drone", price: "$399", rating: 4.7 }
          ]
        },
        {
          id: "components",
          title: "Components",
          description: "High-quality electronic components for manufacturing and assembly",
          image: "/api/placeholder/400/300",
          products: [
            { name: "PCB Boards", price: "$79", rating: 4.9 },
            { name: "Semiconductor Sets", price: "$199", rating: 4.8 },
            { name: "LED Panels", price: "$149", rating: 4.7 }
          ]
        },
        {
          id: "accessories",
          title: "Accessories",
          description: "Complementary accessories for all your tech needs",
          image: "/api/placeholder/400/300",
          products: [
            { name: "Premium Headphones", price: "$89", rating: 4.5 },
            { name: "Power Banks", price: "$49", rating: 4.7 },
            { name: "Wireless Chargers", price: "$39", rating: 4.6 }
          ]
        },
      ];
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Browse Categories
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our extensive range of tech products sourced directly from
              leading Chinese manufacturers
            </p>
          </div>

          <Tabs
            defaultValue="electronics"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-lg py-3"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  <div className="lg:col-span-1">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                    <h3 className="text-xl font-semibold mt-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{category.description}</p>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                      View All Products
                    </Button>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {category.products.map((product, index) => (
                        <m.div
                          key={index}
                          whileHover={{
                            y: -10,
                            boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          className="bg-white p-4 rounded-lg shadow-md"
                        >
                          <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                            <img
                              src="/api/placeholder/150/150"
                              alt={product.name}
                              className="max-h-full"
                            />
                          </div>
                          <h4 className="font-medium">{product.name}</h4>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-blue-600 font-semibold">
                              {product.price}
                            </span>
                            <span className="text-yellow-500 text-sm flex items-center">
                              ★★★★★ {product.rating}
                            </span>
                          </div>
                        </m.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg text-center"
                          >
                            <h4 className="font-medium text-gray-800">
                              Sub-category {index + 1}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              50+ products
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </m.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </LazyMotion>
  );
}
