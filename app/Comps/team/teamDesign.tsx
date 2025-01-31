import person1 from '@/x/public/assets/person1.png'
import person2 from '@/x/public/assets/person2.png'
import person3 from '@/x/public/assets/person3.png'
import person4 from '@/x/public/assets/person4.png'
import person5 from '@/x/public/assets/person5.png'
import person6 from '@/x/public/assets/person6.png'
import person7 from '@/x/public/assets/person7.png'
import person8 from '@/x/public/assets/person8.png'
import ProfileCard from './profileCard'



export default function TeamDesign() {
    const profiles = [
        {
            name: "Erik Andersson",
            image: person1,
            role: "Lead Designer"
        },
        {
            name: "Maria Lindström",
            image: person2,
            role: "Interior Architect"
        },
        {
            name: "Johan Bergman",
            image: person3,
            role: "3D Visualization Specialist"
        },
        {
            name: "Sofia Nilsson",
            image: person4,
            role: "Color Consultant"
        },
        {
            name: "Lars Ekström",
            image: person5,
            role: "Lighting Designer"
        },
        {
            name: "Anna Karlsson",
            image: person6,
            role: "Furniture Specialist"
        },
        {
            name: "Peter Sjöberg",
            image: person7,
            role: "Space Planning Expert"
        },
        {
            name: "Emma Öberg",
            image: person8,
            role: "Sustainable Design Consultant"
        },
    ]
    return (
        <>
            <section className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">Designer</h1>
                            <div className="w-36 h-0.5 bg-gray-900" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 max-w-3xl">
                            Creative Person
                        </h2>
                        <h1 className="text-xl font-light text-gray-900 max-w-3xl">
                            Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                        </h1>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {profiles.map((profile) => (
                            <ProfileCard key={profile.name} name={profile.name} image={profile.image.src} role={profile.role} />
                        ))}
                    </div>
                </div>


            </section>
        </>
    )
}