export const Webs = ({ websites }) => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-blue-300">

            <div className="container mx-auto p-4">

                <h1 className="text-4xl font-bold mb-4 text-center">Estado de Sitios Web CGIG</h1>

                <div className="bg-white">

                    {websites.map((website, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 p-4 hover:bg-gray-50"
                        >
                            {/* Desktop: Una sola fila */}
                            {/* website name */}
                            <div className="hidden md:grid grid-cols-4">
                                <div className="col-span-1 text-blue-500 font-bold hover:underline">
                                    <a
                                        href={`https://${website.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {website.website}
                                    </a>
                                </div>
                                {/* website status */}
                                <div className="col-span-1 text-black font-semibold">
                                    <span
                                        className={`px-4 py-2 rounded ${website.status === "Online"
                                            ? "text-green-600 bg-green-100"
                                            : website.status === "Danger"
                                                ? "text-yellow-500 bg-yellow-100"
                                                : "text-red-600 bg-red-100"
                                            }`}
                                    >
                                        {website.status}
                                    </span>
                                </div>
                                {/* website time */}
                                <div className="col-span-1 text-black">
                                    {website.responseTime}
                                </div>
                                {/* website code */}
                                <div className="col-span-1 text-black">
                                    {website.status === "Online" ? website.statusCode : website.error || "N/A"}
                                </div>
                            </div>


                            {/* Mobile: Dos filas */}
                            <div className="grid grid-cols-2 md:hidden gap-2">

                                {/* website name */}
                                <div className="text-blue-500 font-bold hover:underline">
                                    <a
                                        href={`https://${website.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {website.website}
                                    </a>
                                </div>
                                {/* website status */}
                                <div className="text-black font-semibold">
                                    <span
                                        className={`px-4 py-2 rounded ${website.status === "Online"
                                            ? "text-green-600 bg-green-100"
                                            : website.status === "Danger"
                                                ? "text-yellow-500 bg-yellow-100"
                                                : "text-red-600 bg-red-100"
                                            }`}
                                    >
                                        {website.status}
                                    </span>
                                </div>

                                {/* Second row */}
                                    {/* response */}
                                    <div className="text-black">
                                        {website.responseTime === "N/A" ? "Sin respuesta" :  website.responseTime}
                                    </div>

                                    {/* status */}
                                    <div className="text-black">
                                        {website.status === "Online" ? website.statusCode : website.error || "Error no listado"}
                                    </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
