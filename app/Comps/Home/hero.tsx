'use client'
import Image from "next/image"
import whiteCounter from "@/x/public/assets/counter.jpg"
import ProjectsCounter from "../projectCounter/projectsCounter"

export default function Hero() {
    return (
        <>

            {/*Heading*/}
            <section>
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Design your
                                <br />
                                interior with high
                                <br />
                                quality.
                            </h1>
                        </div>
                        <div className="flex justify-end items-start">
                            <h1 className="text-xl font-semibold leading-tight text-gray-900 -rotate-90 translate-x-16 translate-y-10">
                                2022
                                <br />
                                All Rights Reserved
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/*Counter and stats section*/}
            <section className="container mx-auto mt-24 relative">
                <div className="relative">
                    <Image
                        src={whiteCounter || "/placeholder.svg"}
                        alt="hero"
                        className="mx-auto max-w-screen-xl max-h-[513px] w-full h-auto object-cover"
                    />
                    {/*Blue overlay with stats*/}
                    <ProjectsCounter />
                </div>
            </section>
        </>

    )
}

