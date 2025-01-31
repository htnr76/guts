import ContactForm from "./contactForm"
import Locations from "./lcoation"
export default function ContactForm1() {
    return (
        <>
            <section className="container mx-auto px-4 py-16 max-w-7xl">



                <div className="flex flex-col items-center justify-center mt-16">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="max-w-[600px] text-xl text-gray-900 font-light text-center mt-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </section>
            <section>
                <ContactForm />
                <Locations /> 
            </section>
        </>
    )
}