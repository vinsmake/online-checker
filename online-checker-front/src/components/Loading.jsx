import { LifeLine } from "react-loading-indicators"

export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center">
            <LifeLine color="#3030cc" size="large" text="Se están revisando las webs..." textColor="" />
        </div>
    )
}