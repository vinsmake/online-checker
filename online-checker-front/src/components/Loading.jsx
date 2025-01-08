import { LifeLine } from "react-loading-indicators"

export const Loading = () => {
    return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50"> 
        <LifeLine color="#316dcc" size="large" text="Se están revisando las webs..." textColor="" />
    </div>
    )
}