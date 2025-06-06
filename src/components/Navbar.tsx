"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">

            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Dance Courses">
                <div className="flex flex-col space-y-4 text-sm">
                 <HoveredLink href="/web-dev">Garba</HoveredLink>
                 <HoveredLink href="/interface-design">Kathakali</HoveredLink>
                <HoveredLink href="/seo">Bharatanatyam</HoveredLink>
                <HoveredLink href="/branding">Sattriya </HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
                
            </MenuItem>
        </Menu>
      
    </div>
  )
}

export default Navbar
