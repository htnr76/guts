export default function Locations() {
    const stores = [
        {
            id: 1,
            location: 'Jakarta',
            description: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
        },
        {
            id: 2,
            location: 'Surakarta',
            description: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
        },
        {
            id: 3,
            location: 'Yogyakarta',
            description: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
        },
        {
            id: 4,
            location: 'Bandung',
            description: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
        },
    ]
    return (
        <>
            <section className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="flex justify-between gap-8">
                    {/* Left side - Contact Information */}
                    <div className="space-y-16 max-w-xl">
                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">Location</h1>
                                <div className="w-36 h-0.5 bg-gray-900" />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-semibold text-gray-900">
                                    Visit Our Stores
                                </h2>
                                <h1 className="text-xl font-light text-gray-900">
                                    Find us at these locations.
                                </h1>
                                <h2 className="text-xl font-light text-gray-900">
                                    <span className="font-bold">Email</span> dananz@gmail.com
                                </h2>
                                <h2 className="text-xl font-light text-gray-900">
                                    <span className="font-bold">Phone</span> +62 815 002 1000
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Stores Grid */}
                    <div className="grid grid-cols-2 gap-8 flex-1">
                        {stores.map(store => (
                            <div key={store.id} className="bg-gray-100 p-6 rounded-lg">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {store.location}
                                </h2>
                                <p className="text-gray-900 mt-5">
                                    {store.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}