import { useState } from "react";

export default function BrandNew() {
    const [visibleBrand, setVisibleBrand] = useState<boolean>(true);

    const handleReadMoreButton = () => {
        setVisibleBrand(!visibleBrand);
    }

    return (
        <>
            <div className="mt-5 text-xl font-bold leading-6 max-md:max-w-full">
                Brand New
            </div>
            <div style={{ position: "relative" }}>
            <img
                loading="lazy"
                src="https://roadmap-beta.vercel.app/static/media/star.4c0230edbcfad583097b5b1dad468ba1.svg"
                className="star"
                alt="star"
            />
            <div className="mt-5 text-lg text-sky-400 max-md:max-w-full">
                2022.04
            </div>
            </div>
            <div className="mt-2 tracking-wide text-zinc-600 max-md:max-w-full">
                Advanced Transforms, Interests...
            </div>
            {
            visibleBrand &&
            <div className="hidden sm:block mt-5 tracking-wide leading-5 text-zinc-600 max-md:mr-2.5 max-md:max-w-full">
                Some More Attended....... Some More Attended....... Some More
                Attended.......
                <br />
                Some More Attended....... Some More Attended....... Some More
                Attended.......
            </div>
            }
            <div className="mt-2 tracking-wide text-zinc-400 max-md:max-w-full">
                <button onClick={handleReadMoreButton}>Read More</button>
            </div>
        </>
    );
}