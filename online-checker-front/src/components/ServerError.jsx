import { Atom } from "react-loading-indicators"

export const ServerError = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center">
            <Atom color="#cc3030" size="large" text="Error en el servidor, reinentando..." textColor="" />
        </div>
    )
}