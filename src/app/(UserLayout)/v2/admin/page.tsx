// src/app/admin/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Users, FolderPlus, MessageSquare, UserPlus, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const router = useRouter();
  const [newCategory, setNewCategory] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminRole, setNewAdminRole] = useState("Editor");
  
  // Mock data
  const admins = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin", avatar: "/api/placeholder/40/40" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", avatar: "/api/placeholder/40/40" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Editor", avatar: "/api/placeholder/40/40" },
  ];
  
  const contactRequests = [
    { id: 1, name: "Sarah Brown", email: "sarah@example.com", message: "I'm interested in your products", status: "New", date: "2025-04-26" },
    { id: 2, name: "Alex Davis", email: "alex@example.com", message: "Please send me a catalog", status: "Read", date: "2025-04-25" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Import Co. Admin</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">3</span>
            </button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/api/placeholder/40/40" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="font-medium">Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Categories Card */}
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <FolderPlus className="text-blue-600" />
                <span>Categories</span>
              </CardTitle>
              <CardDescription>Manage product categories</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Input 
                  placeholder="New category name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
                <Button size="sm">Add</Button>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-between">
              <span className="text-sm text-gray-500">4 categories</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => router.push('/admin/categories')}
              >
                View All
              </Button>
            </CardFooter>
          </Card>

          {/* Admins Card */}
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Users className="text-purple-600" />
                <span>Admins</span>
              </CardTitle>
              <CardDescription>Manage admin users</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="w-full mb-4">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add New Admin
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add New Admin</SheetTitle>
                    <SheetDescription>
                      Create a new admin account with appropriate permissions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Full name"
                        value={newAdminName}
                        onChange={(e) => setNewAdminName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email address"
                        value={newAdminEmail}
                        onChange={(e) => setNewAdminEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <select
                        id="role"
                        className="w-full p-2 border rounded-md"
                        value={newAdminRole}
                        onChange={(e) => setNewAdminRole(e.target.value)}
                      >
                        <option>Super Admin</option>
                        <option>Admin</option>
                        <option>Editor</option>
                      </select>
                    </div>
                    <Button className="w-full mt-4">Create Admin</Button>
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="space-y-3">
                {admins.slice(0, 2).map(admin => (
                  <div key={admin.id} className="flex items-center justify-between p-2 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={admin.avatar} alt={admin.name} />
                        <AvatarFallback>{admin.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{admin.name}</p>
                        <p className="text-xs text-gray-500">{admin.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={admin.role === "Super Admin" ? "default" : "outline"}>
                        {admin.role}
                      </Badge>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-between">
              <span className="text-sm text-gray-500">{admins.length} admins</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => router.push('/admin/admins')}
              >
                View All
              </Button>
            </CardFooter>
          </Card>

          {/* Contact Requests Card */}
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="text-green-600" />
                <span>Contact Requests</span>
              </CardTitle>
              <CardDescription>View and respond to inquiries</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {contactRequests.map(request => (
                  <div key={request.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{request.name}</h3>
                      <Badge variant={request.status === "New" ? "destructive" : "outline"}>
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{request.email}</p>
                    <p className="text-sm line-clamp-2">{request.message}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">{request.date}</span>
                      <Button variant="link" size="sm" className="h-auto p-0">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-between">
              <span className="text-sm text-gray-500">{contactRequests.length} requests</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => router.push('/admin/contacts')}
              >
                View All
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}