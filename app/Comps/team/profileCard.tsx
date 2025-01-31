import Image from "next/image"

export default function ProfileCard({ name, image, role }: { name: string, image: string, role: string }) {
    return (
        <>
            <div className="relative w-64 overflow-hidden rounded-lg bg-[#1a237e]">
                <div className="aspect-[3/4] w-full">

                    <Image src={image} alt="niggers" width={1000} height={1000} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-white text-black drop-shadow-lg border-b-4 border-l-4 border-r-4 border-secondary">
                    <h2 className="text-lg font-bold">{name}</h2>

                    <p className="text-sm">{role}</p>
                </div>
            </div>
        </>



    )
}
