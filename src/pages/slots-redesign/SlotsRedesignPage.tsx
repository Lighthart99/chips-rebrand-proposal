import SlotCardV2 from './components/SlotCardV2';

const SlotsRedesignPage = () => {
  return (
    <div className="flex flex-col bg-[#121414] h-screen items-center justify-center relative">
      <div className="flex flex-col max-w-[1272px] mx-auto gap-4  z-10">
        <div className="flex flex-row items-center justify-between w-full mt-[440px]">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/icons/slot.svg"
              alt="logo"
              className="size-[24px] object-cover"
            />
            <span
              className="text-white font-bold text-[20px]"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
              }}
            >
              Slots
            </span>
          </div>

          <div className="flex flex-row gap-2">
            <div className="w-[32px] h-[32px] bg-[#1E2630] rounded-md flex items-center justify-center  ">
              <img
                src="/icons/chevron-left.svg"
                alt="chevron left"
                className="size-[16px] object-cover"
              />
            </div>

            <div className="w-[32px] h-[32px] bg-[#1E2630] rounded-md flex items-center justify-center  ">
              <img
                src="/icons/chevron-right.svg"
                alt="chevron right"
                className="size-[16px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full  flex flex-row items-center justify-center  gap-[16px]">
          {/* <SlotCardV2 type="Le King" provider="hacksaw gaming" /> */}
          <SlotCardV2 type="Sweet Bonanace" provider="Pragmatic Play" />
          <SlotCardV2 type="Disorder" provider="Nolimit City" />
          <SlotCardV2 type="Starlight Princess" provider="Pragmatic Play" />
          <SlotCardV2 type="Pandemic Rising" provider="Pragmatic Play" />
          <SlotCardV2 type="Bangkok Hilton" provider="NoLimit City" />
          <SlotCardV2 type="Breakout" provider="NoLimit City" />
          <SlotCardV2 type="Bee Keeper" provider="NoLimit City" />
        </div>
      </div>

      <img
        src="/chips-bg.png"
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default SlotsRedesignPage;
