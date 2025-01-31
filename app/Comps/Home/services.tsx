import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/x/components/ui/accordion";
import Image from "next/image";
import soffa from "@/x/public/assets/soffa.png";

export default function Services() {


  const accInfo = [
    {
      id: 1,
      title: "Interior Design",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores cum quas ipsam libero impedit. Voluptas, natus iusto iure dolorum, non hic, aperiam quibusdam minus ut reiciendis expedita eligendi perspiciatis.",
    },
    {
      id: 2,
      title: "Consultant",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores cum quas ipsam libero impedit. Voluptas, natus iusto iure dolorum, non hic, aperiam quibusdam minus ut reiciendis expedita eligendi perspiciatis.",
    },
    {
      id: 3,
      title: "Construction Consultant",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores cum quas ipsam libero impedit. Voluptas, natus iusto iure dolorum, non hic, aperiam quibusdam minus ut reiciendis expedita eligendi perspiciatis.",
    },
  ];
  return (

    <div>
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="space-y-16">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-gray-900">Services</h1>
              <div className="w-24 h-0.5 bg-gray-900" />
            </div>
            <div className="flex flex-row gap-8">
              <div className="w-1/2 space-y-4">
                <h2 className="text-4xl font-semibold text-gray-900">
                  Attractive furniture with the best quality.
                </h2>
                <p className="text-gray-900 font-light">
                  Customize your interior design into a dream place with the
                  best designers and quality furniture. We try our best to
                  fulfill your expectations.
                </p>
                <Accordion type="multiple" className="w-full space-y-4">
                  {accInfo.map((item) => (
                    <AccordionItem key={item.id} value={item.id.toString()} className="border p-4">
                      <AccordionTrigger className="font-bold text-xl">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-lg">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="w-1/2">
                <Image

                  src={soffa || "/placeholder.svg"}
                  alt="Sofa"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
