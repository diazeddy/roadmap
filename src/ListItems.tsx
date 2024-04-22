import React from "react"

interface ListItemsProps {
    title: string,
    imageURL: string,
    imageClassName: string,
    displayDate?: string,
    visibleDisplayDate: boolean,
    children?: React.ReactNode,
}


const ListItems = ({title, imageURL, imageClassName, displayDate, visibleDisplayDate, children} : ListItemsProps) => {
    
    return (
        <>
            <div className="text-xl font-bold leading-6 max-md:max-w-full">
                {title}
            </div>
            <div style={{ position: "relative" }}>
                <img
                    loading="lazy"
                    src={imageURL}
                    className={imageClassName}
                    alt={imageClassName}
                />
                { 
                    visibleDisplayDate === true &&
                    <div className="mt-5 text-lg text-sky-400 max-md:max-w-full">
                        {displayDate}
                    </div>
                }
                {
                    visibleDisplayDate === false &&
                    <div className="flex gap-2.5 mt-5 text-violet-400 rounded bg-zinc-100 max-md:flex-wrap">
                        <div className="shrink-0 w-1 bg-violet-400 h-[34px]" />
                        <div className="flex-1 my-auto max-md:max-w-full">
                        SPOILER ALERT!
                        </div>
                    </div>
                }
            </div>
            {children}
        </>
    );
}

export default ListItems;