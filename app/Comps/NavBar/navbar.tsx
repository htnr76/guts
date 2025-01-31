"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/x/components/ui/button"
import logo from '@/x/public/assets/logo.png'
import { Sheet, SheetContent, SheetTrigger } from "@/x/components/ui/sheet"
import { useState } from "react"
import HomeMain from "../Home/main"
import MainAbout from "../about/mainAbout"
import MainServices from "../Services/mainServices"

export default function NavBar() {
    const [activePage, setActivePage] = useState("Home")
    
    const handlePage = (page: string) => {
        setActivePage(page)
        console.log(page)
    }

    const routes = [
        {
            name: "Home",
            component: <HomeMain />,
            onClick: () => handlePage("Home")
        },
        {
            name: "About us",
            component: <MainAbout />,
            onClick: () => handlePage("About us")

        },
        {
            name: "Services",
            component: <MainServices />,
            onClick: () => handlePage("Services")

        },
        {
            name: "Our Team",
            component: <div>Team Component</div>,
            onClick: () => handlePage("Team")
        },
    ]

    const getCurrentComponent = () => {
        return routes.find(route => route.name === activePage)?.component
    }

    return (
        <>
            <nav className="border-b">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Image src={logo} alt="logo" width={100} height={100} />

                    <div className="flex items-center gap-6">
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-[55.5px]">
                            {routes.map((route) => (
                                <button
                                    key={route.name}
                                    onClick={route.onClick}
                                    className={`text-sm font-medium transition-colors relative ${
                                        activePage === route.name 
                                        ? 'text-primary after:absolute after:bottom-[-18px] after:left-0 after:w-full after:h-[2px] after:bg-primary' 
                                        : 'hover:text-primary'
                                    }`}
                                >
                                    {route.name}
                                </button>
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
                                        <button
                                            key={route.name}
                                            onClick={route.onClick}
                                            className={`text-lg font-medium transition-colors ${
                                                activePage === route.name 
                                                ? 'text-primary font-bold' 
                                                : 'hover:text-primary'
                                            }`}
                                        >
                                            {route.name}
                                        </button>
                                    ))}
                                    <Button className="mt-4 bg-[#383B65] hover:bg-[#2d2f50]">Contact Us</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
            <div>
                {getCurrentComponent()}
            </div>
        </>
    )
}

