import logo from "@/x/public/assets/logo.png"
import Image from "next/image"
import { Input } from "@/x/components/ui/input"
import { Button } from "@/x/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"




export default function Footer() {

    return (
        <footer className="grid grid-cols-2 gap-8 m-8">
            <div className="flex flex-col gap-4">
                <Image src={logo} alt="logo" width={150} height={150} />
                <h1 className="text-gray-900 font-bold text-4xl">
                    One of the best furniture agency.
                </h1>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-gray-900 font-bold text-4xl">Enter your email</h1>
                <Input type="email" placeholder="Enter your email" className="w-auto" />
                <div className="flex flex-row gap-4 justify-between items-center">
                    <Button variant="outline" size="lg" className="bg-gray-900 text-white">
                        Subscribe
                    </Button>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="bg-gray-900 text-white">
                            <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="bg-gray-900 text-white">
                            <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="bg-gray-900 text-white">

                            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                        </Button>

                        <Button variant="outline" size="icon" className="bg-gray-900 text-white">
                            <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                        </Button>
                    </div>

                </div>
            </div>


        </footer>


    )
}
