import { Atom } from "react-loading-indicators"

export const ServerError = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center text-red-600 text-xl font-medium	">
            <Atom color="#cc3030" size="large" text="Error en el servidor, reinentando..." textColor="" />
            <p>Si el error persiste</p>
            <p>Favor de contactar al administrador</p>
        </div>
    )
}