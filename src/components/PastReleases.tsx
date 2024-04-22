export default function PastReleases() {
    return (
        <>
            <div className="hidden sm:block mt-2 tracking-wide text-zinc-600 max-md:max-w-full">
                Something to do with Grids?
            </div>
            <div className="sm:hidden mt-2 tracking-wide text-zinc-600 max-md:max-w-full">
                Something to do with grids...?
            </div>
            <ul className="hidden sm:block flex-col pl-6 mt-2 tracking-wide leading-5 text-zinc-600 max-md:pl-5 max-md:max-w-full list-disc">
                <li className="max-md:max-w-full">
                    Distort, skew and wrap your selections with the four corner
                    handles. Pull one or two handles to adjust the aspect ratio, or tap one or two
                    handles and pinch / spread / pull to activate the more advanced transforms.
                </li>
                <li className="max-md:max-w-full">
                    Tap through the Interests list in your Account screen to help us
                    better understand your needs.
                </li>
            </ul>
            <div className="hidden sm:block mt-2 mr-6 tracking-wide leading-5 max-md:mr-2.5 max-md:max-w-full">
                For a deeper explanation, including pics + video examples, check out
                the full
                <br />
                <a href="#" className="text-sky-400">release post.</a>
            </div>
            <div className="hidden sm:block mt-2 tracking-wide leading-5 max-md:max-w-full">
                Submit your{" "}
                <a href="#" className="text-sky-400">feedback and feature requests here.</a>
            </div>
        </>
    );
}