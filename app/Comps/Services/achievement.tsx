import Image from "next/image";
import livingRoom from '@/x/public/assets/livingRoom.jpg'
import dishwash from '@/x/public/assets/dishwasher.jpg'
import gayPeople from '@/x/public/assets/gayPeople.jpg'
export default function Achievement() {
    const achievements = [
        {
            id: 1,
            title: "Interior design",
            description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
            image: livingRoom
        },
        {
            id: 2,
            title: "Consultant",
            description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
            image: dishwash
        },
        {
            id: 3,
            title: "construction consultant",
            description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
            image: gayPeople
        }
    ]
    return (
        <>
            <section className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">Achievement</h1>
                            <div className="w-36 h-0.5 bg-gray-900" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {achievements.map((achievement) => (
                            <div key={achievement.id} className="flex flex-row justify-between">
                                <div className="w-1/2">
                                    <Image 
                                        src={achievement.image} 
                                        alt={achievement.title} 
                                        width={1000} 
                                        height={1000} 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="w-1/3 flex flex-col justify-center gap-4">
                                    <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                                    <p className="text-gray-900 text-lg">{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
