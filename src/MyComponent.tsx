import { useState, useRef, useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import Roadmap from "./components/Roadmap";
import RoadmapContent from "./components/RoadmapContent";
import MobileSelection from "./components/MobileSelection";
import WorkinProgress from "./components/WorkinProgress";
import BrandNew from "./components/BrandNew";
import PastReleases from "./components/PastReleases";
import ListItems from "./ListItems";

import './MyComponent.css';

const imageURLGroup = [
  "https://roadmap-beta.vercel.app/static/media/arrows.d6634df28853c4dac5fb5f3eec99d3e4.svg",
  "https://roadmap-beta.vercel.app/static/media/star.4c0230edbcfad583097b5b1dad468ba1.svg",
  "https://roadmap-beta.vercel.app/static/media/circle.8b8462a38ed9b2050487bc8726ce1392.svg"
];

export default function MyComponent() {
  const { width: windowWidth } = useWindowSize();

  const [theme, setTheme] = useState<string>("Light");

  const contentRef = useRef<HTMLDivElement>(null);
  const imageHeight = useMemo(() => contentRef.current?.clientHeight, [windowWidth])

  return (
    <div className="flex flex-col items-start py-16 pr-20 pl-8 bg-white max-w-[810px] max-md:px-5 font-inter">
      <div style={{ background: theme === 'Light' ? '#fff' : '#333', color: theme === 'Light' ? '#333' : '#fff' }} className="py-20 px-20">
        <div className="flex gap-0 justify-center self-center text-xl text-white whitespace-nowrap">
          <div className={`${theme === 'Light' ? 'justify-center px-7 py-1.5 bg-blue-400 max-md:px-5' : 'justify-center px-7 py-1.5 bg-gray-400 max-md:px-5'}`}>
            <button onClick={() => setTheme("Light")}>Light</button>
          </div>
          <div className={`${theme === 'Light' ? 'justify-center px-7 py-1.5 bg-zinc-800 max-md:px-5' : 'justify-center px-7 py-1.5 bg-blue-400 max-md:px-5'}`}>
            <button onClick={() => setTheme("Dark")}>Dark</button>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          {(theme === 'Light') &&
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff40052dc9774bde4716c49009cc482a076b466d6da3c65944e71e8ac4135228?"
              className="shrink-0 max-w-full aspect-[5.56] w-[209px]"
              alt="light_concepts"
            />
          }
          {(theme === 'Dark') &&
            <img
              loading="lazy"
              src="https://roadmap-beta.vercel.app/static/media/logoDark.7ced066b149879ee7973c36223af2885.svg"
              className="shrink-0 max-w-full aspect-[5.56] w-[209px]"
              alt="dark_concepts"
            />
          }
          <div className="flex gap-5 items-start py-1.5">
            <div className="flex gap-1.5 items-start pt-1.5 pb-1 text-base font-bold leading-5 whitespace-nowrap text-neutral-800">
              <div>EN</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/982d412dfad3b7e40a307f3fae3acbaa4fd1afa827972129a680a93eca08e2e8?"
                className="shrink-0 mt-1.5 w-3 aspect-[1.72]"
                alt="caret"
              />
            </div>
            <div className="flex justify-center items-center py-1.5 mt-1.5 bg-zinc-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f7094a65e92a67234cd3f11c943c14a96506ef574accb6a89beba9cffeaf78a?"
                className="w-px aspect-[0.1]"
                alt="seperater_first"
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
                alt="seperater_second"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb465313cae6a0ff7ff69df7c6bc99f23391d0f20bb5379e11b799d03cd4171?"
              className="shrink-0 mt-2 aspect-[0.93] w-[15px]"
              alt="magnifier"
            />
          </div>
        </div>
        <Roadmap />
        <RoadmapContent />
        <MobileSelection />
        <div className="flex gap-0 mt-8 text-base leading-5 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1fd7cbd65083269ea8f4ac8a66cc0eb7c2cb5b4d24860622286cd5f611dd5d0?"
            className="shrink-2 aspect-[0.04] w-[37px]"
            style={{ height: imageHeight }}
            alt="line"
          />
          <div className="grow shrink-0 pl-8 basis-0 w-fit max-md:max-w-full">
            <div id="parentDiv" className="flex flex-col " ref={contentRef}>
              <ListItems title="Work in Progress" imageURL={imageURLGroup[0]} imageClassName="arrow" visibleDisplayDate={false}>
                <WorkinProgress />
              </ListItems>
              <ListItems title="Brand New" imageURL={imageURLGroup[1]} imageClassName="star" displayDate="2022.04" visibleDisplayDate={true}>
                <BrandNew />
              </ListItems>
              <ListItems title="Past Releases" imageURL={imageURLGroup[2]} imageClassName="circle" displayDate="2022.2" visibleDisplayDate={true}>
                <PastReleases />
              </ListItems>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}