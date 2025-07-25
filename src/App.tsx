import React, { useState, useEffect } from 'react';

import { RiArrowDownSLine } from '@remixicon/react';
import { motion } from 'framer-motion';

// Custom hook for number scrambling effect
const useNumberScramble = (targetNumber, duration = 500) => {
  const [displayNumber, setDisplayNumber] = useState(targetNumber);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (targetNumber === displayNumber) return;

    setIsScrambling(true);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        setDisplayNumber(targetNumber);
        setIsScrambling(false);
        clearInterval(interval);
        return;
      }

      // Scramble the numbers
      let scrambled = '';
      for (let i = 0; i < targetNumber.length; i++) {
        if (targetNumber[i] === '.') {
          scrambled += '.';
        } else if (Math.random() < 0.7) {
          scrambled += Math.floor(Math.random() * 10).toString();
        } else {
          scrambled += targetNumber[i];
        }
      }
      setDisplayNumber(scrambled);
    }, 50);

    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return { displayNumber, isScrambling };
};

const Wallet = ({ bounceTrigger, amount }) => {
  const { displayNumber, isScrambling } = useNumberScramble(amount, 800);

  return (
    <motion.div
      className="relative z-10 flex h-[40px] w-[228px] flex-row rounded-[8px] bg-[#1E2630] px-[14px] overflow-hidden"
      animate={{ scale: bounceTrigger ? 1.02 : 1 }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 16,
        duration: 0.3,
      }}
    >
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-[4px]">
          <img src="/usdt.svg" alt="logo" className="relative z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: bounceTrigger ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className="w-[24px] h-[24px] bg-[#1BA27A] rounded-full absolute top-[8px] left-[10px] z-0 blur-[16px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: bounceTrigger ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className="w-[24px] h-[24px] bg-[#1BA27A] rounded-full absolute top-[8px] left-[10px] z-0 blur-[32px]" />
          </motion.div>
          <motion.p
            key={displayNumber}
            className={`text-[14px] font-semibold ${isScrambling ? 'text-green-400' : 'text-white'}`}
          >
            {displayNumber}
          </motion.p>
        </div>
        <div>
          <div className="flex flex-row items-center gap-[4px]">
            <p className="text-[14px] font-semibold text-white">USDT</p>
            <RiArrowDownSLine
              className="max-h-[20px] min-h-[20px] max-w-[20px] min-w-[20px] text-white"
              style={{ color: 'white' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [bounceTrigger, setBounceTrigger] = useState(false);
  const [amount, setAmount] = useState('1.000');

  // Trigger bounces at specific times and amount changes
  useEffect(() => {
    // 1st bounce
    const timer1 = setTimeout(() => setBounceTrigger(true), 600);
    const timer2 = setTimeout(() => setBounceTrigger(false), 800);
    // 2nd bounce + amount change
    const timer2_amount = setTimeout(() => {
      setBounceTrigger(true);
      setAmount('3.000');
    }, 700);
    const timer3 = setTimeout(() => setBounceTrigger(true), 1100);
    const timer4 = setTimeout(() => setBounceTrigger(false), 1300);
    // 3rd bounce + amount change
    const timer4_amount = setTimeout(() => {
      setBounceTrigger(true);
      setAmount('4.000');
    }, 1200);
    const timer5 = setTimeout(() => setBounceTrigger(true), 1400);
    const timer6 = setTimeout(() => setBounceTrigger(false), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer2_amount);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer4_amount);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div className="bg-[#0F1318] flex items-center justify-center h-screen w-full">
      <div className="relative">
        <Wallet bounceTrigger={bounceTrigger} amount={amount} />

        {/* 1st coin */}

        <motion.div
          initial={{ y: 50, position: 'absolute' }}
          animate={{ y: -24, position: 'absolute' }}
          transition={{
            duration: 0.8,
            ease: [1, 0.01, 0.94, 0.99],
          }}
          style={{ zIndex: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0 }}
            animate={{
              x: [-24, -12, 16],
              opacity: [0, 1, 1],
              rotate: [48, 90, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 1],
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <img src="/usdt.svg" alt="logo" />
          </motion.div>
        </motion.div>

        {/* 2nd coin */}

        <motion.div
          initial={{ y: 50, position: 'absolute' }}
          animate={{ y: -24, position: 'absolute' }}
          transition={{
            duration: 0.8,
            ease: [1, 0.01, 0.94, 0.99],
            delay: 0.4,
          }}
          style={{ zIndex: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0 }}
            animate={{
              x: [24, 12, 16],
              opacity: [0, 1, 1],
              rotate: [48, 90, 0],
              scale: [0, 1.6, 0.5],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 1],
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            <img src="/usdt.svg" alt="logo" />
          </motion.div>
        </motion.div>

        {/* 3nd coin */}

        <motion.div
          initial={{ y: 50, position: 'absolute' }}
          animate={{ y: -24, position: 'absolute' }}
          transition={{
            duration: 0.6,
            ease: [1, 0.01, 0.94, 0.99],
            delay: 0.8,
          }}
          style={{ zIndex: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0 }}
            animate={{
              x: [50, 24, 16],
              opacity: [0, 1, 1],
              rotate: [48, 180, 270],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              times: [0, 0.4, 1],
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
          >
            <img src="/usdt.svg" alt="logo" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
