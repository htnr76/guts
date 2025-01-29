"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/x/components/ui/button"
import logo from '@/x/public/assets/logo.png'
import { Sheet, SheetContent, SheetTrigger } from "@/x/components/ui/sheet"

export default function NavBar() {
    
    const routes = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About us",
            path: "/about",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Our Team",
            path: "/team",
        },
    ]

    return (
        <nav className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Image src={logo} alt="logo" width={100} height={100} />
                
                <div className="flex items-center gap-6">
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-[55.5px]">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex">
                        <Button className="bg-[#383B65] hover:bg-[#2d2f50]">Contact Us</Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 mt-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.path}
                                        href={route.path}
                                        className="text-lg font-medium transition-colors hover:text-primary"
                                    >
                                        {route.name}
                                    </Link>
                                ))}
                                <Link href="/contact" className="mt-4 bg-[#383B65] hover:bg-[#2d2f50]">Contact Us</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

