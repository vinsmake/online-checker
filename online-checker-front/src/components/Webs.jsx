export const Webs = ({ websites }) => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-blue-300">
            <div className="container  mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-center">Estado de Sitios Web CGIG</h1>
                <div className="overflow-x-auto bg-white	">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-blue-400">
                                <th className="border border-gray-300 px-4 py-2 text-left">Sitio Web</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Estado</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Tiempo de Respuesta</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Código de Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {websites.map((website, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">
                                        <a
                                            href={`https://${website.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {website.website}
                                        </a>
                                    </td>
                                    <td
                                        className={`border border-gray-300 px-4 py-2 ${website.status === "Online"
                                                ? "text-green-600 font-semibold bg-green-100"
                                                : website.status === "Danger"
                                                    ? "text-yellow-500 font-semibold bg-yellow-100"
                                                    : "text-red-600 font-semibold bg-red-100"
                                            }`}
                                    >
                                        {website.status}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {website.responseTime}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {website.status === 'Online' ? website.statusCode : website.error || 'N/A'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
