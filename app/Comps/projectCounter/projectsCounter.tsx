import { useState, useEffect } from "react"

export default function ProjectsCounter() {
    {/*Переменные для счетчиков*/}
    const [projectCount, setProjectCount] = useState(0)
    const [teamCount, setTeamCount] = useState(0)
    const [yearCount, setYearCount] = useState(0)
    {/*Целевые значения*/}
    const targetValues = {
        projects: 350,
        teams: 23,
        years: 15
    }
    {/*Функция для счетчиков*/}
    useEffect(() => {
        {/*Длительность анимации*/}
        const duration = 2000 // 2 sekunder för animationen
        {/*Интервал обновления*/}
        const interval = 20 // Uppdatera var 20:e millisekund

        {/*Инкременты*/}
        const projectIncrement = (targetValues.projects * interval) / duration
        {/*Инкремент для команд*/}
        const teamIncrement = (targetValues.teams * interval) / duration
        {/*Инкремент для лет*/}
        const yearIncrement = (targetValues.years * interval) / duration

        {/*Счетчик*/}

        const counter = setInterval(() => {
            setProjectCount(prev => {
                {/*Следующее значение*/}
                const next = prev + projectIncrement
                {/*Если следующее значение больше или равно целевому значению, то устанавливаем целевое значение*/}
                return next >= targetValues.projects ? targetValues.projects : next
            })

            setTeamCount(prev => {
                {/*Следующее значение*/}
                const next = prev + teamIncrement
                {/*Если следующее значение больше или равно целевому значению, то устанавливаем целевое значение*/}
                return next >= targetValues.teams ? targetValues.teams : next
            })

            setYearCount(prev => {
                {/*Следующее значение*/}
                const next = prev + yearIncrement
                {/*Если следующее значение больше или равно целевому значению, то устанавливаем целевое значение*/}
                return next >= targetValues.years ? targetValues.years : next
            })

        }, interval)

        {/*Возвращаем функцию для очистки интервала*/}
        return () => clearInterval(counter)
    }, [])


    return (
        <>
            <div className="absolute top-0 right-0 bg-[#2C3878] text-white p-8 md:p-12 h-full max-w-md flex flex-col justify-center space-y-12">
                <div>
                    {/*Секция с заголовком и счетчиком*/}
                    <h2 className="text-5xl font-bold mb-2">{Math.round(projectCount)}+</h2>
                    <p className="text-lg">Project Completed</p>
                </div>
                <div>
                    {/*Секция с заголовком и счетчиком*/}
                    <h2 className="text-5xl font-bold mb-2">{Math.round(teamCount)}+</h2>
                    <p className="text-lg">Professional Teams</p>
                </div>
                <div>
                    {/*Секция с заголовком и счетчиком*/}
                    <h2 className="text-5xl font-bold mb-2">{Math.round(yearCount)}+</h2>
                    <p className="text-lg">Years Experience</p>
                </div>
            </div>
        </>
    )
}

