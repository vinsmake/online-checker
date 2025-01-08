export const Webs = ({ websites }) => {
    return (
        <div>
            <h1>Estado de Sitios Web</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Sitio Web</th>
                        <th>Estado</th>
                        <th>Tiempo de Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    {websites.map((website, index) => (
                        <tr key={index}>
                            <td>{website.website}</td>
                            <td>{website.status}</td>
                            <td>{website.responseTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}