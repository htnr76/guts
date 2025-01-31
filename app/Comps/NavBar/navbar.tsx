"use client"

import Image from "next/image"

import { Menu } from "lucide-react"
import { Button } from "@/x/components/ui/button"
import logo from '@/x/public/assets/logo.png'
import { Sheet, SheetContent, SheetTrigger } from "@/x/components/ui/sheet"
import { useState } from "react"
import HomeMain from "../Home/main"
import MainAbout from "../about/mainAbout"
import MainServices from "../Services/mainServices"
import MainTeam from "../team/mainTeam"
import ContactForm1 from "../contact/mainContact"

export default function NavBar() {
    {/*Секция с навигацией*/}
    const [activePage, setActivePage] = useState("Home")
    {/*Функция для переключения страниц*/}
    const handlePage = (page: string) => {
        setActivePage(page)
        console.log(page)
    }
    {/*Секция с маршрутами*/}
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
            component: <MainTeam />,
            onClick: () => handlePage("Our Team")

        },
        {
            name: "Contact Us",
            component: <ContactForm1 />,
            onClick: () => handlePage("Contact Us")

        },
    ]
    {/*Функция для получения текущего компонента*/}
    const getCurrentComponent = () => {
        return routes.find(route => route.name === activePage)?.component
    }


    return (
        <>
            {/*Секция с навигацией*/}
            <nav className="border-b">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Image src={logo} alt="logo" width={100} height={100} />


                    <div className="flex items-center gap-6">
                        {/*Секция с навигацией на десктопе*/}
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

                        {/*Секция с навигацией на мобильном*/}
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
            {/*Секция с текущим компонентом*/}
            <div>
                {getCurrentComponent()}
            </div>

        </>
    )
}

