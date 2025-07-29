import { motion } from 'framer-motion';

const VipProgramElementAnimation = () => {
  return (
    <div className="flex items-center justify-center mb-6 pointer-events-none relative">
      <div className="max-w-[120px] relative">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: 0.2,
          }}
          src="/vip-program-emblem/centercircle.svg"
          alt="vip-program-bg"
          className="h-[80px] relative z-30"
        />

        {/* left wings */}
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <motion.img
            initial={{ scale: 0, x: -12 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: 0.8,
            }}
            src="/vip-program-emblem/left-1.svg"
            alt="left-1"
            className="w-[48px] -left-2 absolute bottom-[26px] "
          />

          <motion.img
            initial={{ scale: 0, x: -12 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: 0.9,
            }}
            src="/vip-program-emblem/left-2.svg"
            alt="left-2"
            className="w-[48px] -left-3.5 absolute bottom-[36px] "
          />

          <motion.img
            initial={{ scale: 0, x: -12 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: 1,
            }}
            src="/vip-program-emblem/left-3.svg"
            alt="left-3"
            className="w-[48px] -left-5 absolute bottom-[48px] "
          />
        </div>

        {/* right wings */}
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <motion.img
            initial={{ scale: 0, x: -12 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: 0.8,
            }}
            src="/vip-program-emblem/right-1.svg"
            alt="right-1"
            className="w-[48px] -right-2 absolute bottom-[26px] "
          />

          <motion.img
            initial={{ scale: 0, x: -12 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: 0.9,
            }}
            src="/vip-program-emblem/right-2.svg"
            alt="right-2"
            className="w-[48px] -right-3.5 absolute bottom-[36px] "
          />

          <motion.img
            initial={{ scale: 0, x: -12 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: 1,
            }}
            src="/vip-program-emblem/right-3.svg"
            alt="right-3"
            className="w-[48px] -right-5 absolute bottom-[48px] "
          />
        </div>

        {/* top tail */}
        <motion.img
          initial={{ scale: 0, y: 12 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: 0.4,
          }}
          src="/vip-program-emblem/top-tail.svg"
          alt="vip-program-bg"
          className="w-[28px] absolute -top-[12px] left-[26px] "
        />

        {/* bottom tail */}
        <motion.img
          initial={{ scale: 0, y: -12 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: 0.6,
          }}
          src="/vip-program-emblem/bottom-tail.svg"
          alt="vip-program-bg"
          className="w-[28px] absolute bottom-[1px] left-[26px] "
        />
      </div>
    </div>
  );
};

export default VipProgramElementAnimation;
