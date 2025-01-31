import ocean from '@/x/public/assets/ocean.jpg'
import Image from 'next/image'
import ProjectsCounter from '../projectCounter/projectsCounter'

export default function Achievement() {
    return (
        <>
            <section className="container mx-auto px-4 py-16 max-w-7xl">

                <div className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">Achievement</h1>
                            <div className="w-36 h-0.5 bg-gray-900" />
                        </div>
                        <h2 className="text-4xl font-semibold text-gray-900 max-w-3xl">
                            interior customization with Danaanz, best quality with professional workers
                        </h2>
                    </div>
                    <div className="relative">
                        <Image 
                            src={ocean} 
                            alt="chairs" 
                            className="mx-auto max-w-screen-xl max-h-[513px] w-full h-auto object-cover"
                        />
                        <ProjectsCounter />
                    </div>
                </div>


            </section>

        </>

    )
}

