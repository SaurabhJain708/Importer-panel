"use client";

import { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  LogIn,
  Star,
  Info,
  Briefcase,
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
    <div className="md:hidden block absolute top-4 right-4 z-[99999]">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="p-3 rounded-xl text-white hover:bg-blue-600 transition"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-64 bg-[#0f172a] text-white border-none shadow-xl"
        >
          <nav className="space-y-4 p-4">
            <h2 className="text-xl font-bold text-blue-500 mb-4">Menu</h2>

            {navItems.map((item) => (
              <Link href={item.href} key={item.href} passHref>
                <Button
                  onClick={() => setOpen(false)}
                  variant="ghost"
                  className="w-full justify-start px-4 py-3 rounded-lg hover:bg-blue-700 hover:text-white flex items-center space-x-3 transition"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200 font-medium">
                    {item.label}
                  </span>
                </Button>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
