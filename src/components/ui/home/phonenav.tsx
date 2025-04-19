"use client";

import { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  LogIn,
  Star,
  Info,
  Briefcase,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function PhoneSidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Sign In",
      href: "/sign-in",
      icon: LogIn,
    },
    {
      label: "Features",
      href: "/features",
      icon: Star,
    },
    {
      label: "About Us",
      href: "/about-us",
      icon: Info,
    },
    {
      label: "Careers",
      href: "/careers",
      icon: Briefcase,
    },
  ];

  return (
    <div className="md:hidden fixed top-4 right-4 z-[1001]">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="p-3 rounded-xl text-gray-700 bg-white shadow-lg hover:bg-gray-100 transition"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72 bg-white text-gray-800 border-none shadow-2xl flex flex-col justify-between"
        >
          {/* Top Section */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-6 mt-4 px-4">
              Menu
            </h2>
            <nav className="space-y-2 px-4">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  <Button
                    onClick={() => setOpen(false)}
                    variant="ghost"
                    className="w-full justify-start px-4 py-3 rounded-md hover:bg-blue-50 flex items-center space-x-3 transition"
                  >
                    <item.icon className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-gray-200">
            <Link href="/sign-up">
              <Button
                onClick={() => setOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Sign Up
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

