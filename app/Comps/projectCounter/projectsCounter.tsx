import { useState, useEffect } from "react"

export default function ProjectsCounter() {
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
        </>
    )
}

