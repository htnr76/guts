import Image from "next/image"
import nigger from '@/x/public/assets/негр.png'

export default function ProfileCard() {
    return (
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            {/*Секция с изображением*/}
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0">
                    <Image

                        src={nigger}
                        alt="Profile picture"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                {/*Секция с заголовком и описанием*/}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Arga Danaan</h2>
                    <p className="text-gray-500">CEO of Dananz</p>

                </div>
            </div>
        </div>
    )
}
