import Image from "next/image";
import wood from "@/x/public/assets/wood.png"
import { Button } from "@/x/components/ui/button";
export default function Material() {
    return (
        <div>
            {/*Секция с заголовком и изображением*/}
            <section className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-bold text-gray-900">Material</h1>
                            <div className="w-24 h-0.5 bg-gray-900" />
                        </div>
                        <div className="flex flex-row gap-8">
                            <div className="w-1/2 space-y-4">
                                <h2 className="text-4xl font-semibold text-gray-900 mx-w-[400px]">
                                    choice of materials for quality furniture.
                                </h2>
                                <h1 className="text-gray-900 font-light">
                                    You can custom the material as desired. And our furniture uses the best materials and selected quality materials.
                                </h1>
                                <Button variant="outline" size={'lg'} className="bg-gray-900 text-white">
                                    See More
                                </Button>
                            </div>

                            <div className="w-1/2">
                                {/*Секция с изображением*/}
                                <Image
                                    src={wood || "/placeholder.svg"}
                                    alt="Sofa"
                                    className="w-full h-auto"

                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    )
}
