export const Webs = ({ websites }) => {
    return (
        <section className="background">

            <div className="container mx-auto p-4">

                <h1 className="mb-4 text-3xl font-extrabold text-orange-500 md:text-5xl lg:text-6xl text-center drop-shadow-[0_1px_1.2px_rgba(0,0,0,1)]

">Estado de sitios
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 "> CGIG</span>
                </h1>


                <div className="bg-white border-8 rounded-xl border-gray-600">

                    {websites.map((website, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200  p-4 hover:transform hover:scale-105 transition-transform hover:rounded-xl

                                ${website.status === "Online"
                                    ? " bg-green-50 hover:bg-green-100 hover:border-green-300"
                                    : website.status === "Danger"
                                        ? "bg-yellow-50 hover:bg-yellow-100 hover:border-yellow-300"
                                        : "bg-red-50 hover:bg-red-100 hover:border-red-300"
                                }`

                            }
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
                                            ? "text-green-700 bg-green-200"
                                            : website.status === "Danger"
                                                ? "text-yellow-700 bg-yellow-200"
                                                : "text-red-700 bg-red-200"
                                            }`}
                                    >
                                        {website.status}
                                    </span>
                                </div>
                                {/* website response */}
                                <div className="col-span-1 text-black">
                                    {website.responseTime === "N/A" ? "Sin respuesta" : website.responseTime}
                                </div>
                                {/* website code */}
                                <div className="col-span-1 text-black">
                                    {website.status === "Online" ? website.statusCode : website.error || "Error no listado"}
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
                                <div className="text-black font-semibold text-right">
                                    <span
                                        className={`px-4 py-2 rounded ${website.status === "Online"
                                            ? "text-green-700 bg-green-200"
                                            : website.status === "Danger"
                                                ? "text-yellow-700 bg-yellow-200"
                                                : "text-red-700 bg-red-200"
                                            }`}
                                    >
                                        {website.status}
                                    </span>
                                </div>

                                {/* Second row */}
                                {/* response */}
                                <div className="text-black ">
                                    {website.responseTime === "N/A" ? "Sin respuesta" : website.responseTime}
                                </div>

                                {/* status */}
                                <div className="text-black text-right">
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
