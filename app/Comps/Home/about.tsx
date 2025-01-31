import Image from "next/image"
import { Button } from "@/x/components/ui/button"
import ProfileCard from "./profileCard"
import chairs from '@/x/public/assets/chairs.jpg'

export default function About() {
    return (
        <div className="bg-white">
            <section className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="space-y-16">
                    {/*Секция с заголовком и изображением*/}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">About</h1>

                            <div className="w-16 h-0.5 bg-gray-900" />
                        </div>
                        <h2 className="text-4xl font-semibold text-gray-900 max-w-3xl">
                            &ldquo;We&rsquo;re one of the best furniture agency. Prioritizing customers and making purchases easy are the
                            hallmarks of our agency.&rdquo;
                        </h2>
                    </div>

                    {/*Секция с сеткой*/}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="relative aspect-[16/10] w-full">
                            <Image

                                src={chairs}
                                alt="Modern kitchen interior with dining table"
                                fill
                                className="object-cover rounded-lg"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-8">
                            <ProfileCard />
                            <div className="space-y-8">
                                <p className="text-xl font-light leading-relaxed text-gray-900">
                                    Online learning with us does not interfere with your daily life. because learning can be done anytime
                                    and anywhere.
                                </p>
                                <Button variant="default" size="lg" className="bg-indigo-700 hover:bg-indigo-800">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

