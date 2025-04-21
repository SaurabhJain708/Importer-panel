// src/app/(LandingPage)/v1/products/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Layout, Menu, Spin } from "antd";
import {
  SearchOutlined,
  LaptopOutlined,
  MobileOutlined,
  CameraOutlined,
  AudioOutlined,
  TabletOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { MenuProps } from "antd";

const { Sider, Content } = Layout;

// Mock data (unchanged)
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Premium Gaming Laptop",
    category: "Laptops",
    price: 799.99,
    stock: 45,
    image: "/api/placeholder/300/200",
    tags: ["Gaming", "i7", "RTX 4060"],
  },
  {
    id: 2,
    name: "Ultra-slim Smartphone",
    category: "Smartphones",
    price: 349.99,
    stock: 120,
    image: "/api/placeholder/300/200",
    tags: ["5G", "AMOLED", "Fast Charging"],
  },
  {
    id: 3,
    name: "Professional DSLR Camera",
    category: "Cameras",
    price: 599.99,
    stock: 18,
    image: "/api/placeholder/300/200",
    tags: ["4K", "24MP", "Optical Zoom"],
  },
  {
    id: 4,
    name: "Noise Cancelling Headphones",
    category: "Audio",
    price: 129.99,
    stock: 65,
    image: "/api/placeholder/300/200",
    tags: ["Bluetooth", "40h Battery", "ANC"],
  },
  {
    id: 5,
    name: "Tablet Pro",
    category: "Tablets",
    price: 299.99,
    stock: 34,
    image: "/api/placeholder/300/200",
    tags: ["10.5 inch", "64GB", "Stylus Support"],
  },
  {
    id: 6,
    name: "Smart Watch Ultra",
    category: "Wearables",
    price: 89.99,
    stock: 78,
    image: "/api/placeholder/300/200",
    tags: ["Heart Rate", "GPS", "7-day Battery"],
  },
];

// Category icons (unchanged)
const CATEGORY_ICONS: any = {
  "All Products": <SearchOutlined />,
  Laptops: <LaptopOutlined />,
  Smartphones: <MobileOutlined />,
  Tablets: <TabletOutlined />,
  Cameras: <CameraOutlined />,
  Audio: <AudioOutlined />,
  Wearables: <AppstoreOutlined />,
  "Smart Home": <HomeOutlined />,
};

const CATEGORIES = ["All Products", ...new Set(MOCK_PRODUCTS.map((product) => product.category))];

export default function ProductsPage() {
  const [products, setProducts] = useState<typeof MOCK_PRODUCTS>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8); // Number of products per page
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [siderVisible, setSiderVisible] = useState(true);

  // Check window width on mount and resize
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
        if (window.innerWidth < 640) {
          setSiderVisible(false);
        } else {
          setSiderVisible(true);
        }
      } else {
        setCollapsed(false);
        setSiderVisible(true);
      }
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 800);
  }, []);

  // Filter and sort products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All Products" || product.category === selectedCategory;
    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
    if (sortOrder === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  // Paginate products
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleCategorySelect = (info: { key: string }) => {
    setSelectedCategory(CATEGORIES[Number(info.key)]);
    setCurrentPage(1); // Reset to first page on category change
    
    // On mobile, auto-collapse the sidebar after selection
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  const toggleSidebar = () => {
    if (window.innerWidth < 640) {
      setSiderVisible(!siderVisible);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const menuItems: MenuProps["items"] = CATEGORIES.map((category, index) => ({
    key: index.toString(),
    icon: CATEGORY_ICONS[category],
    label: category,
  }));

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle button */}
      <div className="sticky top-0 z-10 flex items-center p-4 bg-white shadow-sm">
        <Button 
          variant="outline" 
          onClick={toggleSidebar}
          className="mr-2"
          size="sm"
        >
          {siderVisible ? "≪" : "≫"}
        </Button>
        <h1 className="text-xl font-semibold text-gray-800">Anantya Overseas</h1>
      </div>

      <Layout className="bg-transparent">
        {/* Sidebar */}
        {siderVisible && (
          <Sider
            width={220}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            theme="light"
            className="shadow-sm transition-all duration-300 bg-white"
            style={{ height: "calc(100vh - 56px)", position: "sticky", top: "56px", left: 0 }}
          >
            <div className="h-14 p-2 text-center">
              <h2 className={`m-0 ${collapsed ? "hidden" : "block"} text-lg font-semibold`}>
                Categories
              </h2>
            </div>
            <Menu
              mode="inline"
              selectedKeys={[CATEGORIES.indexOf(selectedCategory).toString()]}
              onClick={handleCategorySelect}
              items={menuItems}
              className="border-r-0"
            />
          </Sider>
        )}

        {/* Content */}
        <Content className="m-2 sm:m-4 p-3 sm:p-5 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col gap-4 mb-6">
            <div className="w-full">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
            </div>
            <div className="w-full">
              <Select
                value={sortOrder}
                onValueChange={(value) => {
                  setSortOrder(value);
                  setCurrentPage(1); // Reset to first page on sort change
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">{selectedCategory}</h2>

          {loading ? (
            <div className="text-center py-10">
              <Spin size="large" />
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-t-md"
                      />
                    </CardHeader>
                    <CardContent className="pt-3">
                      <CardTitle className="text-base font-semibold truncate">
                        {product.name}
                      </CardTitle>
                      <p className="text-green-600 font-medium mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <span className="text-xs text-gray-600">Stock: {product.stock}</span>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {paginatedProducts.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-600">No products found. Try changing your filters.</p>
                </div>
              )}

              {totalProducts > 0 && (
                <div className="mt-6 flex justify-center sm:justify-end">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => handlePageChange(currentPage - 1)}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => {
                          // Show fewer page numbers on mobile
                          if (window.innerWidth < 640) {
                            return Math.abs(page - currentPage) < 2 || page === 1 || page === totalPages;
                          }
                          return true;
                        })
                        .map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => handlePageChange(currentPage + 1)}
                          className={
                            currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}