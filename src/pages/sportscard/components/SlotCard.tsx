import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

type SportsCardProps = {
  type?: string;
  provider?: string;
};

const SlotCard: React.FC<SportsCardProps> = ({ type, provider }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHovering) {
      video.play().catch(() => {});
    } else {
      video.pause();
      try {
        video.currentTime = 0;
      } catch (_err) {
        void _err; // ignore: resetting currentTime can throw while metadata is not ready
      }
    }
  }, [isHovering]);
  return (
    <div
      className="relative cursor-pointer transform hover:scale-[1.01] transition-all "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* tail bottom right */}
      <img
        src={`/sportscard/bottom-right-card-tail.svg`}
        alt="tail"
        className="absolute -bottom-[2px] -right-[2px] [max-w-[32px] object-cover z-50"
      />
      <div
        className={`group relative w-[208px] h-[282px] rounded-lg overflow-hidden ${type === 'soccer' && 'bg-[#0075DB]'}`}
      >
        {/* text */}
        <motion.div className="absolute bottom-2 left-0 w-full h-1/3 flex items-center justify-center z-50 flex-col ">
          <span
            style={{
              color: '#FFF',
              textAlign: 'center',
              textShadow:
                '0 3.496px 10.487px rgba(0, 0, 0, 0.25), 0 1.748px 3.496px rgba(0, 0, 0, 0.10)',
              fontFamily: '"FONTSPRING DEMO - Winner Sans Cond Bold"',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '41.949px',
            }}
          >
            {type ? type.charAt(0).toUpperCase() + type.slice(1) : ''}
          </span>
          <span
            style={{
              color: '#FFF',
              textAlign: 'center',
              textShadow:
                '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.10)',
              fontFamily: '"FONTSPRING DEMO - Winner Sans Cond"',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '1.2px',
            }}
          >
            {provider
              ? provider.charAt(0).toUpperCase() + provider.slice(1)
              : ''}
          </span>
        </motion.div>

        {/* gradient */}
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#FB45AB] to-transparent opacity-100 z-40" />

        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center z-30">
          <img
            src={`/sportscard/Elvis.webp`}
            alt={type}
            className="h-[200px] object-cover mb-4 group-hover:scale-[0.98] transition-all duration-300 "
          />
        </div>

        {/* background */}
        <div className="absolute top-0 right-0 w-full h-full flex items-start justify-center z-20">
          <video
            ref={videoRef}
            src={`/sportscard/background-le-king.webm`}
            className="h-full object-cover"
            muted
            playsInline
            preload="metadata"
            poster={`/sportscard/background-le-king.webp`}
          />
        </div>

        {/* hover-only play button with animated glass effect */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer "
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <motion.div
                className="flex items-center justify-center   "
                initial={{
                  scale: 0.85,
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  boxShadow:
                    '0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0)',
                  borderColor: 'rgba(255, 255, 255, 0)',
                  borderRadius: 500,
                  '--blur': '0px',
                }}
                animate={{
                  scale: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow:
                    '0 8px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: 500,
                  '--blur': '5.2px',
                }}
                exit={{
                  scale: 0.95,
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  boxShadow:
                    '0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0)',
                  borderColor: 'rgba(255, 255, 255, 0)',
                  '--blur': '0px',
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: 56,
                  height: 56,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  backdropFilter: 'blur(var(--blur))',
                  WebkitBackdropFilter: 'blur(var(--blur))',
                }}
              >
                <motion.img
                  src={`/sportscard/play-arrow.svg`}
                  alt="play"
                  className="pt-1 w-[34px] h-[
                  34px]"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className="absolute top-0 right-0 w-full h-full flex items-start justify-center z-20">
          {!isHovering ? (
            <video
              src={`/sportscard/background-le-king.webm`}
              className="h-full pb-4 object-cover  group-hover:scale-[0.98] transition-all duration-300"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={`/sportscard/background-le-king.webp`}
              alt={type}
              className="h-[240px] object-cover  group-hover:scale-[0.98] transition-all duration-300"
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default SlotCard;
