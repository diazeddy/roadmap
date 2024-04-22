import { useState } from "react";

export default function WorkinProgress() {
    
    const [visibleWork, setVisibleWork] = useState<boolean>(true);

    const handleReadLessButton = () => {
        setVisibleWork(!visibleWork);
    }

    return (
        <>
            <div className="md:hidden mt-5 tracking-wide text-zinc-600 max-md:max-w-full">
                Click to uncover what we're working on right now
            </div>
            <div className="hidden md:block mt-5 tracking-wide leading-5 text-zinc-600 max-md:max-w-full">
                Not big on surprises, huh? No worries, here's what we aim to launch
                in the next few months:
            </div>
            {
            visibleWork && <>
                <ul className="hidden md:block flex-col pl-6 mt-5 tracking-wide text-zinc-600 max-md:pl-5 max-md:max-w-full list-disc">
                <li className="max-md:max-w-full">Auto-complete (sanp-to-sketching)</li>
                <li className="max-md:max-w-full">Apple Sign In support</li>
                <li className="max-md:max-w-full">Scale & Measurement</li>
                <li className="max-md:max-w-full">Text Tool</li>
                <li className="max-md:max-w-full">More keyboard shortcuts</li>
                </ul>
                <div className="hidden md:block mt-5 tracking-wide text-zinc-600 max-md:max-w-full">
                    Follow up reading:
                </div>
                <div className="hidden md:block flex-col pl-6 mt-5 tracking-wide text-sky-400 max-md:pl-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                    How we make our product decisions
                </div>
                <div className="max-md:max-w-full">
                    Feature requests & bug reports
                </div>
                </div>
            </>
            }
            <div className="hidden md:block mt-5 tracking-wide text-zinc-400 max-md:max-w-full">
                <button onClick={handleReadLessButton}>Read Less</button>
            </div>
        </>
    );
}