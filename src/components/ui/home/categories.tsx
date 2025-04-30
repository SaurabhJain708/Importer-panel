"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "../button";
import { CatType } from "@/lib/Types/homeCategory.type";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("electronics");
  const [categories, setCategories] = useState<Array<CatType>>();
  const [defaultCat,setDefaultCat] = useState("")
  useEffect(() => {
    const prepareCategoryArray = async () => {
      const response = await fetch("/api/user/get-categories");
      const data = await response.json();
      const realData = data.data;
      const dataArray = Array.isArray(realData)
        ? realData.slice(0, 3)
        : [realData];

      const newRequest = dataArray.map(async (e): Promise<CatType> => {
        return fetch(`/api/user/get-items/${e._id}`)
          .then((res) => res.json())
          .then((resultjson) => {
            const resultArr = Array.isArray(resultjson.data)
              ? resultjson.data.slice(0, 3)
              : [resultjson.data];
            return { ...e, items: resultArr };
          });
      });

      const fetched = await Promise.all(newRequest);
      setDefaultCat(fetched[0]._id)
      setCategories(fetched);
    };
    prepareCategoryArray();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">Browse Categories</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-3"></div>
            <p className="mt-5 text-gray-600 max-w-xl mx-auto text-lg">
              Explore our extensive range of tech products sourced directly from leading Chinese manufacturers.
            </p>
          </div>

          {categories && (
            <Tabs
              defaultValue={defaultCat}
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="flex justify-center items-center h-20 px-6 gap-4 flex-wrap mb-10">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category._id}
                    value={category._id}
                    className="text-base cursor-pointer px-4 py-2 h-12 rounded-md bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category._id} value={category._id}>
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                  >
                    {/* Left: Category Info */}
                    <div>
                      <img
                        src={category.coverImage}
                        alt={category.name}
                        className="rounded-xl shadow-md w-full h-64 object-cover"
                      />
                      <h3 className="text-2xl font-semibold mt-5">{category.name}</h3>
                      <p className="text-gray-600 mt-2">{category.description}</p>
                      <Button className="mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base rounded-md">
                        View All Products
                      </Button>
                    </div>

                    {/* Right: Product Grid */}
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items &&
                          category.items.map((product, index) => (
                            <m.div
                              key={index}
                              whileHover={{
                                y: -6,
                                scale: 1.02,
                                boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
                              }}
                              className="bg-white rounded-lg p-5 shadow transition"
                            >
                              <div className="h-40 rounded-md overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                                <img
                                  src={product?.coverImage}
                                  alt={product?.name}
                                  className="object-cover h-full w-full"
                                />
                              </div>
                              <h4 className="text-base font-medium text-gray-800 truncate">
                                {product?.name}
                              </h4>
                              <div className="flex justify-between items-center mt-3 text-sm">
                                <span className="text-blue-600 font-semibold">
                                  ₹{product?.price}
                                </span>
                                <span className="text-yellow-500 flex items-center gap-1">
                                  ★ {product?.rating}
                                </span>
                              </div>
                            </m.div>
                          ))}
                      </div>

                      {/* Sub-category section */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                        {Array(4)
                          .fill(0)
                          .map((_, index) => (
                            <div
                              key={index}
                              className="bg-gray-100 p-4 rounded-lg text-center shadow-sm"
                            >
                              <h4 className="text-gray-800 font-semibold">Sub-category {index + 1}</h4>
                              <p className="text-gray-500 text-sm mt-1">50+ products</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </m.div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>
    </LazyMotion>
  );
}
