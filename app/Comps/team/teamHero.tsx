import Image from "next/image"
import niggers from '@/x/public/assets/niggers.jpg'
export default function TeamHero() {
    return (
        <>
            <section className="container mx-auto px-4 py-16 max-w-7xl">

                <div className="flex flex-col items-center justify-center mt-16">
                    <h1 className="text-4xl font-bold mb-4">About us</h1>
                    <p className="max-w-[600px] text-xl text-gray-900 font-light text-center mt-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-16 w-full">
                    <Image src={niggers} alt="chairs" width={1000} height={1000} className="w-full h-auto" />
                </div>
            </section>
        </>
    )
}