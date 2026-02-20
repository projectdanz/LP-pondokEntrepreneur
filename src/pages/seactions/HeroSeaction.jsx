

export default function HeroSeaction() {
    return (
        <>
            <div className="container mx-auto px-5 py-24 bg-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl font-bold mb-4">Pondok Pesantren</h1>
                        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante vestibulum finibus.</p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src="https://via.placeholder.com/600x400" alt="" />
                    </div>
                </div>
            </div>            
        </>
    )
}