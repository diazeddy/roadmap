import * as React from "react";

interface RoadmapItemProps {
  title: string;
  description: string;
  readMoreText: string;
  isExpanded?: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  title,
  description,
  readMoreText,
  isExpanded = false,
}) => (
  <>
    <div className="mt-5 text-xl font-bold leading-6 text-neutral-800 max-md:max-w-full">
      {title}
    </div>
    <div className="mt-5 tracking-wide leading-5 max-md:mr-2.5 max-md:max-w-full">
      {description}
    </div>
    <div className="mt-2 tracking-wide text-zinc-400 max-md:max-w-full">
      {readMoreText}
    </div>
  </>
);

interface RoadmapProps {
  items: RoadmapItemProps[];
}

const Roadmap: React.FC<RoadmapProps> = ({ items }) => (
  <div className="flex flex-col grow shrink-0 pl-8 basis-0 w-fit max-md:max-w-full">
    {items.map((item, index) => (
      <RoadmapItem key={index} {...item} />
    ))}
  </div>
);

const QualityComponent: React.FC = () => {
  const roadmapItems: RoadmapItemProps[] = [
    {
      title: "Work in Progress",
      description: `Not big on surprises, huh? No worries, here's what we aim to launch in the next few months:`,
      readMoreText: "Read Less",
    },
    {
      title: "Brand New",
      description: `Some More Attended....... Some More Attended....... Some More Attended.......
      Some More Attended....... Some More Attended....... Some More Attended.......`,
      readMoreText: "Read More",
    },
    {
      title: "Past Releases",
      description: "Something to do with Grids?",
      readMoreText: "",
    },
  ];

  return (
    <div className="flex flex-col items-start py-16 pr-20 pl-8 bg-white max-w-[810px] max-md:px-5">
      <div className="flex gap-0 self-center text-xl text-white whitespace-nowrap">
        <div className="justify-center px-7 py-1.5 bg-blue-400 max-md:px-5">
          Light
        </div>
        <div className="justify-center px-7 py-1.5 bg-zinc-800 max-md:px-5">
          Dark
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff40052dc9774bde4716c49009cc482a076b466d6da3c65944e71e8ac4135228?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
          alt="Roadmap"
          className="shrink-0 max-w-full aspect-[5.56] w-[209px]"
        />
        <div className="flex gap-5 items-start py-1.5">
          <div className="flex gap-1.5 items-start pt-2.5 pb-1 text-base font-bold leading-5 whitespace-nowrap text-neutral-800">
            <div>EN</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/982d412dfad3b7e40a307f3fae3acbaa4fd1afa827972129a680a93eca08e2e8?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
              alt=""
              className="shrink-0 mt-1.5 w-3 aspect-[1.72]"
            />
          </div>
          <div className="flex justify-center items-center py-1.5 mt-1.5 bg-zinc-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f7094a65e92a67234cd3f11c943c14a96506ef574accb6a89beba9cffeaf78a?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
              alt=""
              className="w-px aspect-[0.1]"
            />
          </div>
          <div className="self-stretch text-base leading-5 text-center text-zinc-600">
            Download
          </div>
          <div className="self-stretch text-base leading-5 text-center text-zinc-600">
            Learn
          </div>
          <div className="flex justify-center items-center py-1.5 mt-1.5 bg-zinc-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f415dd458764b812e28a480afe022843ad49cf4979fbe19d584720995139db1b?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
              alt=""
              className="w-px aspect-[0.1]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb465313cae6a0ff7ff69df7c6bc99f23391d0f20bb5379e11b799d03cd4171?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
            alt=""
            className="shrink-0 mt-1.5 aspect-[0.93] w-[15px]"
          />
        </div>
      </div>
      <h1 className="mt-8 text-3xl font-semibold leading-8 text-neutral-800 max-md:max-w-full">
        Roadmap
      </h1>
      <p className="mt-4 text-base leading-5 text-sky-400 max-md:max-w-full">
        What we're working on, and what we've accomplished in one tidy list. See
        the <span className="text-sky-400">Features</span> list <br /> for a
        full platform comparison.
      </p>
      <div className="flex gap-1.5 justify-center mt-4 text-base font-bold leading-5 whitespace-nowrap text-neutral-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20626b4754422e4e92fdc83fffd4595df240dcbb0278bde73d5942891945f593?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
          alt=""
          className="shrink-0 my-auto w-4 aspect-square"
        />
        <div className="flex gap-2.5 justify-center px-2.5 py-1 rounded bg-zinc-100">
          <div>Android</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0af139b3c97d913f5765b753304b68d5553e6a816fdd869539f0f14aabd3248?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
            alt=""
            className="shrink-0 my-auto aspect-[1.82] w-[11px]"
          />
        </div>
      </div>
      <div className="flex gap-0 mt-8 text-base leading-5 text-zinc-600 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1fd7cbd65083269ea8f4ac8a66cc0eb7c2cb5b4d24860622286cd5f611dd5d0?apiKey=86186ed96c7b4fa2a20c793b61027c94&"
          alt=""
          className="shrink-0 aspect-[0.04] w-[37px] max-md:hidden"
        />
        <Roadmap items={roadmapItems} />
      </div>
      <div className="mt-5 text-lg text-sky-400 max-md:max-w-full">2022.2</div>
      <div className="flex flex-col pl-6 mt-2 tracking-wide leading-5 max-md:pl-5 max-md:max-w-full">
        <p className="max-md:max-w-full">
          Distort, skew and wrap your selections with the four corner handles.
          Pull one <br /> or two handles to adjust the aspect ratio, or tap one
          or two handles and pinch /<br /> spread / pull to activate the more
          advanced transforms.
        </p>
        <p className="max-md:max-w-full">
          Tap through the Interests list in your Account screen to help us
          better <br /> understand your needs.
        </p>
      </div>
      <p className="mt-2 mr-6 tracking-wide leading-5 text-sky-400 max-md:mr-2.5 max-md:max-w-full">
        For a deeper explanation, including pics + video examples, check out the
        full <br /> <span className="text-sky-400">release post.</span>
      </p>
      <p className="mt-2 tracking-wide leading-5 text-sky-400 max-md:max-w-full">
        Submit your{" "}
        <span className="text-sky-400">feedback and feature requests here.</span>
      </p>
    </div>
  );
};

export default QualityComponent;