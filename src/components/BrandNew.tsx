import { useState } from "react";

export default function BrandNew() {
    const [visibleBrand, setVisibleBrand] = useState<boolean>(true);

    const handleReadMoreButton = () => {
        setVisibleBrand(!visibleBrand);
    }

    return (
        <>
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