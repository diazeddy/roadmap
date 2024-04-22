export default function MobileSelection() {
    return (
        <div className="flex gap-1.5 mt-4 text-base font-bold leading-5 whitespace-nowrap text-neutral-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20626b4754422e4e92fdc83fffd4595df240dcbb0278bde73d5942891945f593?"
            className="shrink-0 my-auto w-4 aspect-square"
            alt="android"
          />
          <div className="flex gap-2.5 justify-center px-2.5 py-1 rounded bg-zinc-100">
            <select name="choice">
              <option value="Android" selected>Android</option>
              <option value="IOS">IOS</option>
            </select>
          </div>
        </div>
    );
}