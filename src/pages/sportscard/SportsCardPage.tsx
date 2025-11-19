import SlotCard from './components/SlotCard';
import SportsCard from './components/SportsCard';

const SportsCardPage = () => {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center bg-[#121414] gap-8">
      <SportsCard type="soccer" />
      <SlotCard type="Le King" provider="hacksaw gaming" />
    </div>
  );
};

export default SportsCardPage;
