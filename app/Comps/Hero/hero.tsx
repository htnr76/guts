'use client'
import Image from "next/image"
import whiteCounter from "@/x/public/assets/counter.jpg"
import { useState, useEffect } from "react"

export default function Hero() {
    const [projectCount, setProjectCount] = useState(0)
    const [teamCount, setTeamCount] = useState(0)
    const [yearCount, setYearCount] = useState(0)

    const targetValues = {
        projects: 350,
        teams: 23,
        years: 15
    }

    useEffect(() => {
        const duration = 2000 // 2 sekunder för animationen
        const interval = 20 // Uppdatera var 20:e millisekund

        const projectIncrement = (targetValues.projects * interval) / duration
        const teamIncrement = (targetValues.teams * interval) / duration
        const yearIncrement = (targetValues.years * interval) / duration

        const counter = setInterval(() => {
            setProjectCount(prev => {
                const next = prev + projectIncrement
                return next >= targetValues.projects ? targetValues.projects : next
            })
            setTeamCount(prev => {
                const next = prev + teamIncrement
                return next >= targetValues.teams ? targetValues.teams : next
            })
            setYearCount(prev => {
                const next = prev + yearIncrement
                return next >= targetValues.years ? targetValues.years : next
            })
        }, interval)

        return () => clearInterval(counter)
    }, [])

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
                    <div className="absolute top-0 right-0 bg-[#2C3878] text-white p-8 md:p-12 h-full max-w-md flex flex-col justify-center space-y-12">
                        <div>
                            <h2 className="text-5xl font-bold mb-2">{Math.round(projectCount)}+</h2>
                            <p className="text-lg">Project Completed</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold mb-2">{Math.round(teamCount)}+</h2>
                            <p className="text-lg">Professional Teams</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold mb-2">{Math.round(yearCount)}+</h2>
                            <p className="text-lg">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

