import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/x/components/ui/accordion"

export default function Product() {
    {/*Секция с аккордионами*/}
    const accInfo = [
        {
            id: 1,
            title: "Vintage",
            description: "Vintage is a theme that is inspired by the past. It is a theme that is inspired by the past. It is a theme that is inspired by the past.",
        },
        {
            id: 2,
            title: "Minimalist",
            description: "Minimalist is a theme that is inspired by the past. It is a theme that is inspired by the past. It is a theme that is inspired by the past.",
        },
        {
            id: 3,
            title: "Modern",
            description: "Modern is a theme that is inspired by the past. It is a theme that is inspired by the past. It is a theme that is inspired by the past.",
        },
        {
            id: 4,
            title: "Transitional",
            description: "Scandinavian is a theme that is inspired by the past. It is a theme that is inspired by the past. It is a theme that is inspired by the past.",
        }
    ]

    return (
        <>
            {/*Секция с заголовком и изображением*/}

            <section className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">Product</h1>
                            <div className="w-24 h-0.5 bg-gray-900" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2 max-w-[350px]">
                            <h1 className="text-4xl font-semibold text-gray-900">
                                Choose your product themes.
                            </h1>
                        </div>
                        <div className="flex justify-end max-w-[500px]">
                            <h1 className="text-gray-900 font-light">
                                Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.
                            </h1>
                        </div>
                    </div>
                    <section>
                        <div className="w-full">
                            <Accordion type="multiple" className="w-full space-y-4">
                                {/*Секция с аккордионами*/}
                                {accInfo.map((item) => (
                                    <AccordionItem key={item.id} value={item.id.toString()} className="border p-4">
                                        <AccordionTrigger className="font-bold text-xl">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-lg">
                                            {item.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>
                </div>
            </section>

        </>
    );
}
