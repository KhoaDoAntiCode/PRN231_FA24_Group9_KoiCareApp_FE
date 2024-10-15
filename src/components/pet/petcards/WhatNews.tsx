

const WhatsNew = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full pt-10">
      <header className="flex flex-col">
        <h2 className="text-base font-medium text-black">What's new?</h2>
        <h3 className="text-2xl font-bold capitalize text-sky-950">Take a look at some of our pets</h3>
      </header>
      <button className="flex gap-2 justify-center items-center self-start px-7 py-3 mt-5 text-sm font-medium leading-none border-solid border-[1.5px] border-sky-950 rounded-[57px] text-sky-950 max-md:px-5">
      <span className="self-stretch my-auto">View more</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39761110e1e4a23582b957c2f92bc1e68f6bd60eb2eaffb732d4ec328652f755?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
    </button>
    </section>
  );
};

export default WhatsNew;