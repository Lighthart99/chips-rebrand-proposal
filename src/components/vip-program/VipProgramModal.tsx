import { RiCheckLine, RiCloseLine } from '@remixicon/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import VipProgramElementAnimation from './VipProgramElementAnimation';

const VipProgramModal = () => {
  return (
    <div className="bg-[#0F1318] min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main Modal */}

      <div className="relative">
        {/* Winged Emblem */}
        <div className="absolute -top-6 left-0 w-full h-full z-30 ">
          <VipProgramElementAnimation />
        </div>

        {/* left coin */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: 0.2,
          }}
          className="absolute -left-16 top-16 z-30"
        >
          <img
            src="/coin-left.webp"
            alt="vip-program-bg"
            className="h-[112px] z-30 relative"
          />

          <img
            src="/coin-left.webp"
            alt="vip-program-bg"
            className="h-[112px] absolute top-0 left-0 z-10 opacity-80"
            style={{
              filter: 'blur(48px)',
              transform: 'rotate(180deg)',
            }}
          />
        </motion.div>

        {/* right coin */}
        <motion.div
          initial={{ opacity: 0, y: -40, x: -16, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: 0.4,
          }}
          className="absolute -right-16 bottom-16 z-30"
        >
          <img
            src="/coin-right.webp"
            alt="vip-program-bg"
            className="h-[96px] z-30 relative"
          />

          <img
            src="/coin-right.webp"
            alt="vip-program-bg"
            className="h-[112px] absolute top-0 left-0 z-10 opacity-80"
            style={{
              filter: 'blur(48px)',
              transform: 'rotate(180deg)',
            }}
          />
        </motion.div>

        {/* modal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 0.8,
          }}
          className="max-w-[400px] w-full rounded-[8px] p-[24px] pt-[72px] relative  z-20 flex flex-col gap-[20px] overflow-hidden"
          style={{
            background:
              'radial-gradient(50% 100% at 50% 0%, rgba(254, 224, 115, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #1E2630',
          }}
        >
          {/* Close Button */}
          <Link to="/wallet" className="absolute top-[16px] right-[16px] z-20">
            <RiCloseLine className="text-white/50" size={20} />
          </Link>

          {/* SunShine */}
          <motion.div
            initial={{ opacity: 0, x: -180 }}
            animate={{ opacity: 1, x: -180 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.8,
              delay: 0.2,
            }}
            className="absolute -top-16  w-full h-full z-0 object-cover mix-blend-color-dodge pointer-events-none"
            style={{
              transform: 'rotate(11.25deg)',
              width: '800.59px',
              height: '800.59px',
              filter: 'blur(8px)',
            }}
          >
            <img
              src="/sunshine.webp"
              alt="sunshine.webp"
              className="absolute -top-16 -left-[120px] w-full h-full z-0 object-cover mix-blend-color-dodge pointer-events-none"
              style={{
                transform: 'rotate(11.25deg)',
                width: '800.59px',
                height: '800.59px',
              }}
            />
          </motion.div>

          {/* inner border stroke */}
          <div className="absolute z-20 p-2 w-full h-full top-0 left-0 max-w-[400px] pointer-events-none">
            <div className="w-full h-full rounded-[8px] relative">
              <div
                className="absolute inset-0 rounded-[8px] bg-gradient-to-b from-white/10 to-transparent"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center">
            <h1 className="text-[24px] font-poppins font-bold text-white mb-1">
              Congratulations!
            </h1>

            <p className=" text-base font-regular text-white/90 text-center">
              You have been qualified to our exclusive{' '}
              <span className="text-[#FFD333] font-semibold">VIP Club!</span>
            </p>
          </div>

          <div className="-space-y-4">
            {/* Telegram Button */}
            <Button className="w-full rounded-lg bg-[#3886E2] flex justify-center items-center gap-2 py-2.5 px-4 h-[40px]">
              <img src="/telegram.svg" alt="telegram" className="w-5 h-5" />
              <h2 className="text-white">Get in touch via Telegram</h2>
            </Button>

            {/* Concierge Section */}
            <div className="flex items-center  justify-center rounded-b-lg p-2.5 pt-6 bg-[#3886E2]/20 gap-3">
              <h4 className="text-white font-semibold text-sm">
                Your Concierge
              </h4>
              <div className="flex items-center space-x-1">
                <img
                  src="/monique-avatar.webp"
                  alt="monique"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h4 className="text-white font-semibold text-sm">Monique</h4>
              </div>
            </div>
          </div>

          {/* USP Points */}
          <div className="flex justify-center space-x-8">
            {[1, 2, 3].map(item => (
              <div key={item} className="flex items-center space-x-1">
                <RiCheckLine className="text-[#00C173]" size={20} />
                <h3 className="text-[#00C173] font-medium text-sm">
                  USP {item}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{
            type: 'spring',
            duration: 4,
            delay: 1.5,
          }}
          src="/yellow-lights-right.webp"
          alt="vip-program-bg"
          className="absolute -top-[120px] left-32  z-10 w-[240px] object-cover opacity-50"
        />

        <motion.img
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{
            type: 'spring',
            duration: 4,
            delay: 1.5,
          }}
          src="/yellow-lights-left.webp"
          alt="vip-program-bg"
          className="absolute -top-[120px] left-8  z-10 w-[240px] object-cover opacity-50"
        />
      </div>

      <img
        src="/bg-placeholder.webp"
        alt="vip-program-bg"
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />
    </div>
  );
};

export default VipProgramModal;
