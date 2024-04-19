import { useState } from "react";
import './MyComponent.css';

export default function MyComponent() {
  const [theme, setTheme] = useState<string>("Light");
  const [visibleWork, setVisibleWork] = useState<boolean>(true);
  const [visibleBrand, setVisibleBrand] = useState<boolean>(true);

  const handleReadLessButton = () => {
    setVisibleWork(!visibleWork);
  }

  const handleReadMoreButton = () => {
    setVisibleBrand(!visibleBrand);
  }

  return (
    
    <div className="flex flex-col items-start py-16 pr-20 pl-8 bg-white max-w-[810px] max-md:px-5">
      <div style={{ background: theme === 'Light' ? '#fff' : '#333', color: theme === 'Light' ? '#333' : '#fff' }}>
      <div className="flex gap-0 justify-center self-center text-xl text-white whitespace-nowrap">
        <div className={`${theme === 'Light' ? 'justify-center px-7 py-1.5 bg-blue-400 max-md:px-5' : 'justify-center px-7 py-1.5 bg-gray-400 max-md:px-5'}`}>
          <button onClick={() => setTheme("Light")}>Light</button>
        </div>
        <div className={`${theme === 'Light' ? 'justify-center px-7 py-1.5 bg-zinc-800 max-md:px-5' : 'justify-center px-7 py-1.5 bg-blue-400 max-md:px-5'}`}>
          <button onClick={() => setTheme("Dark")}>Dark</button>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        { (theme === 'Light') &&
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff40052dc9774bde4716c49009cc482a076b466d6da3c65944e71e8ac4135228?"
          className="shrink-0 max-w-full aspect-[5.56] w-[209px]"
        />
        }
        { (theme === 'Dark') &&
        <img
          loading="lazy"
          src="https://roadmap-beta.vercel.app/static/media/logoDark.7ced066b149879ee7973c36223af2885.svg"
          className="shrink-0 max-w-full aspect-[5.56] w-[209px]"
        />
        }
        <div className="flex gap-5 items-start py-1.5">
          <div className="flex gap-1.5 items-start pt-1.5 pb-1 text-base font-bold leading-5 whitespace-nowrap text-neutral-800">
            <div>EN</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/982d412dfad3b7e40a307f3fae3acbaa4fd1afa827972129a680a93eca08e2e8?"
              className="shrink-0 mt-1.5 w-3 aspect-[1.72]"
            />
          </div>
          <div className="flex justify-center items-center py-1.5 mt-1.5 bg-zinc-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f7094a65e92a67234cd3f11c943c14a96506ef574accb6a89beba9cffeaf78a?"
              className="w-px aspect-[0.1]"
            />
          </div>
          <div className="pt-1.5 self-stretch text-base leading-5 text-center text-zinc-600">
            Download
          </div>
          <div className="pt-1.5 self-stretch text-base leading-5 text-center text-zinc-600">
            Learn
          </div>
          <div className="flex justify-center items-center py-1.5 mt-1.5 bg-zinc-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f415dd458764b812e28a480afe022843ad49cf4979fbe19d584720995139db1b?"
              className="w-px aspect-[0.1]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb465313cae6a0ff7ff69df7c6bc99f23391d0f20bb5379e11b799d03cd4171?"
            className="shrink-0 mt-2 aspect-[0.93] w-[15px]"
          />
        </div>
      </div>
      <div className="mt-8 text-3xl font-semibold leading-8 max-md:max-w-full">
        Roadmap
      </div>
      <div className="mt-4 text-base leading-5 max-md:max-w-full">
        What we're working on, and what we've accomplished in one tidy list. See
        the <span className="text-sky-400">Features</span> list for a full platform comparison.
      </div>
      <div className="flex gap-1.5 mt-4 text-base font-bold leading-5 whitespace-nowrap text-neutral-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20626b4754422e4e92fdc83fffd4595df240dcbb0278bde73d5942891945f593?"
          className="shrink-0 my-auto w-4 aspect-square"
        />
        <div className="flex gap-2.5 justify-center px-2.5 py-1 rounded bg-zinc-100">
          <select name="choice">
            <option value="Android" selected>Android</option>
            <option value="IOS">IOS</option>
          </select>
        </div>
      </div>
      <div className="flex gap-0 mt-8 text-base leading-5 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1fd7cbd65083269ea8f4ac8a66cc0eb7c2cb5b4d24860622286cd5f611dd5d0?"
          className="shrink-0 aspect-[0.04] w-[37px]"
        />
        <div className="flex flex-col grow shrink-0 pl-8 basis-0 w-fit max-md:max-w-full">
          <div className="text-xl font-bold leading-6 max-md:max-w-full">
            Work in Progress
          </div>
          <div style={{ position: 'relative'}}>
            <img
                loading="lazy"
                src="https://roadmap-beta.vercel.app/static/media/arrows.d6634df28853c4dac5fb5f3eec99d3e4.svg" 
                className="arrow"
            />
            <div className="flex gap-2.5 mt-5 text-violet-400 rounded bg-zinc-100 max-md:flex-wrap">
              <div className="shrink-0 w-1 bg-violet-400 h-[34px]" />
              <div className="flex-1 my-auto max-md:max-w-full">
                SPOILER ALERT!
              </div>
            </div>
          </div>
          <div className="md:hidden mt-5 tracking-wide text-zinc-600 max-md:max-w-full">
            Click to uncover what we're working on right now
          </div>
          <div className="hidden md:block mt-5 tracking-wide leading-5 text-zinc-600 max-md:max-w-full">
            Not big on surprises, huh? No worries, here's what we aim to launch
            in the next few months:
          </div>
          { 
            visibleWork && <>
              <ul className="hidden md:block flex-col pl-6 mt-5 tracking-wide text-zinc-600 max-md:pl-5 max-md:max-w-full">
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
          <div className="mt-5 text-xl font-bold leading-6 max-md:max-w-full">
            Brand New
          </div>
          <div style={{position: "relative"}}>
            <img
                loading="lazy"
                src="https://roadmap-beta.vercel.app/static/media/star.4c0230edbcfad583097b5b1dad468ba1.svg" 
                className="star"
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
          <div className="mt-5 text-xl font-bold leading-6 max-md:max-w-full">
            Past Releases
          </div>
          <div style={{position: "relative"}}>
            <img
                  loading="lazy"
                  src="https://roadmap-beta.vercel.app/static/media/circle.8b8462a38ed9b2050487bc8726ce1392.svg" 
                  className="circle"
            />
            <div className="mt-5 text-lg text-sky-400 max-md:max-w-full">
              2022.2
            </div>
          </div>
          <div className="hidden sm:block mt-2 tracking-wide text-zinc-600 max-md:max-w-full">
            Something to do with Grids?
          </div>
          <div className="sm:hidden mt-2 tracking-wide text-zinc-600 max-md:max-w-full">
            Something to do with grids...?
          </div>
          <ul className="hidden sm:block flex-col pl-6 mt-2 tracking-wide leading-5 text-zinc-600 max-md:pl-5 max-md:max-w-full">
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
            <span className="text-sky-400">release post.</span>
          </div>
          <div className="hidden sm:block mt-2 tracking-wide leading-5 max-md:max-w-full">
            Submit your{" "}
            <span className="text-sky-400">
              feedback and feature requests here.
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}