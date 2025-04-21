"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, ChevronRight, ArrowUpRight, Star } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Smartphones & Accessories",
      imageUrl: "/api/placeholder/400/320",
      productCount: 78,
      trending: true,
      featured: true
    },
    {
      id: 2,
      name: "Laptops & Computing",
      imageUrl: "/api/placeholder/400/320",
      productCount: 65,
      trending: true,
      featured: false
    },
    {
      id: 3,
      name: "Audio Equipment",
      imageUrl: "/api/placeholder/400/320",
      productCount: 42,
      trending: false,
      featured: true
    },
    {
      id: 4,
      name: "Smart Home Devices",
      imageUrl: "/api/placeholder/400/320",
      productCount: 56,
      trending: true,
      featured: false
    },
    {
      id: 5,
      name: "Gaming Hardware",
      imageUrl: "/api/placeholder/400/320",
      productCount: 34,
      trending: false,
      featured: false
    },
    {
      id: 6,
      name: "Wearable Technology",
      imageUrl: "/api/placeholder/400/320",
      productCount: 29,
      trending: true,
      featured: true
    },
    {
      id: 7,
      name: "Camera & Photography",
      imageUrl: "/api/placeholder/400/320",
      productCount: 23,
      trending: false,
      featured: false
    },
    {
      id: 8,
      name: "Networking Equipment",
      imageUrl: "/api/placeholder/400/320",
      productCount: 19,
      trending: false,
      featured: false
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    const results = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(results);
  }, [searchTerm, categories]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Tech Categories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our extensive collection of premium tech products sourced directly from leading manufacturers in China.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search categories..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Featured</DropdownMenuItem>
              <DropdownMenuItem>Trending</DropdownMenuItem>
              <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories
                .filter(cat => cat.featured)
                .map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories
                .filter(cat => cat.trending)
                .map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories
                .slice(0, 3)
                .map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Categories Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Categories</h2>
            <Button variant="link" className="flex items-center gap-1">
              View All <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.featured)
              .slice(0, 3)
              .map((category) => (
                <FeaturedCategoryCard key={category.id} category={category} />
              ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
            </div>
            <span className="ml-3 text-gray-700 dark:text-gray-300">5.0 from over 300 reviews</span>
          </div>
          <blockquote className="italic text-lg text-gray-600 dark:text-gray-300">
            "The quality of tech products we've sourced from this importer has been exceptional. Their categories are well-organized, making it easy to find exactly what we need for our retail stores."
          </blockquote>
          <div className="mt-4 font-medium">— Sarah Johnson, Tech Retailer</div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to import premium tech products?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Join thousands of businesses worldwide who trust us for their tech import needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">Contact Us</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" size="lg">Request Catalog</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for standard category card
function CategoryCard({ category }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category.trending && (
          <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">Trending</Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{category.productCount} Products</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-50 dark:group-hover:bg-gray-800">
          Explore Category
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}

// Component for featured category cards (larger with different layout)
function FeaturedCategoryCard({ category }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group bg-blue-50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-900">
      <div className="p-6">
        <div className="mb-4">
          {category.trending && (
            <Badge className="bg-red-500 hover:bg-red-600 mb-2">Trending</Badge>
          )}
          <h3 className="text-xl font-bold">{category.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{category.productCount} Products</p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Premium quality {category.name.toLowerCase()} sourced directly from leading manufacturers in China.
        </p>
        <Button className="w-full">View Collection</Button>
      </div>
    </Card>
  );
}