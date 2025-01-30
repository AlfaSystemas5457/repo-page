import React from "react"
import { FaFolderMinus } from "react-icons/fa";

type Props = {
    children?: React.ReactNode,
    title?: string,
    link?: string,
    className: string,
    version?: string
}

export function FolderRepo({ title, link, className, version }: Props) {
    const handleLick = () => {
        if (!link) return

        window.open(link)
    }

    return (
        <div onClick={handleLick} className={className + "bg-slate-50 dark:bg-slate-800 rounded-3xl h-fit flex flex-row hover:cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 m-2 mx-5"}>
            <div className="flex-none w-20 p-5 relative rounded-3xl">
                <FaFolderMinus className="w-full h-full aspect-square " />
            </div>
            <div className="w-full flex-auto pt-6 pb-6 pr-6 flex-col">
                <h1 className="text-2xl font-semibold" >{title}</h1>
                <h2 className="text-xl font-medium">{version}</h2>
            </div>
        </div>
    )
}