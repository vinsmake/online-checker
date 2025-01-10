import { LifeLine } from "react-loading-indicators"

export const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center">
            <LifeLine color="#cc3030" size="large" text="Ha ocurrido un error, reinentando..." textColor="" />
        </div>
    )
}