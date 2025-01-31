export default function AboutServices() {
    const services = [
        {
            id: 1,
            title: "* High Quality",
            content: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },

        {
            id: 2,
            title: "* Professional Designer",
            content: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
        {
            id: 3,
            title: "* The Best Services",
            content: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        },
    ]

    return (
        <section className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="space-y-16">
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-gray-900">Why Choose Us</h1>
                        <div className="w-36 h-0.5 bg-gray-900" />
                    </div>
                    <h2 className="text-xl font-light text-gray-900 max-w-3xl">
                        Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-900">{service.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}


