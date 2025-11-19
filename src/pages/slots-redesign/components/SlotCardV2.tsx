import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { RiPlayFill } from '@remixicon/react';

type SportsCardProps = {
  type?: string;
  provider?: string;
};

const SlotCardV2: React.FC<SportsCardProps> = ({ type, provider }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const itemVideoRef = useRef<HTMLVideoElement | null>(null);

  // Normalize type for comparison (lowercase, replace spaces with hyphens)
  const normalizedType = type?.toLowerCase().replace(/\s+/g, '-') || '';
  const isSweetBonanace = normalizedType === 'sweet-bonanace';
  const isDisorder = normalizedType === 'disorder';
  const isStarlightPrincess = normalizedType === 'starlight-princess';
  const isPandemicRising = normalizedType === 'pandemic-rising';
  const isBangkokHilton = normalizedType === 'bangkok-hilton';
  const isBreakout = normalizedType === 'breakout';
  const isBeeKeeper = normalizedType === 'bee-keeper';

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

  useEffect(() => {
    if (!isSweetBonanace) return;
    const itemVideo = itemVideoRef.current;
    if (!itemVideo) return;
    if (isHovering) {
      itemVideo.play().catch(() => {});
    } else {
      itemVideo.pause();
      try {
        itemVideo.currentTime = 0;
      } catch (_err) {
        void _err; // ignore: resetting currentTime can throw while metadata is not ready
      }
    }
  }, [isHovering, isSweetBonanace]);

  return (
    <div
      className="relative cursor-pointer transform  hover:-translate-y-[4px] transition-all "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`group relative w-[168px] h-[224px] rounded-lg overflow-hidden ${type === 'soccer' && 'bg-[#0075DB]'}`}
      >
        {isSweetBonanace && (
          <img
            src={`/slots/sweet-bonanace/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {isDisorder && (
          <img
            src={`/slots/disorder/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {isStarlightPrincess && (
          <img
            src={`/slots/starlight-princess/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {isPandemicRising && (
          <img
            src={`/slots/pandemic-rising/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {isBangkokHilton && (
          <img
            src={`/slots/bangkok-hilton/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {isBreakout && (
          <img
            src={`/slots/breakout/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {isBeeKeeper && (
          <img
            src={`/slots/bee-keeper/slot-stroke.svg`}
            alt={type}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        )}

        {/* text container */}
        <div className="absolute bottom-0 left-0 w-full z-50">
          <motion.div
            className="flex items-center justify-center flex-col p-[12px]"
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
          >
            <div className="h-[48px] flex items-center justify-center">
              <span
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  textShadow:
                    '0 2px 12px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.10), 0 1px 1px rgba(0, 0, 0, 0.25)',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '24px',
                }}
              >
                {type
                  ? type.split(' ').map((word, index, array) => (
                      <React.Fragment key={index}>
                        {word.charAt(0).toUpperCase() + word.slice(1)}
                        {index < array.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  : ''}
              </span>
            </div>
            <span
              style={{
                color: '#FFF',
                textAlign: 'center',
                textShadow:
                  '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.10)',
                fontFamily: '"Inter"',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '14px',
                letterSpacing: '0px',
              }}
              className="mt-[8px]"
            >
              {provider
                ? provider.charAt(0).toUpperCase() + provider.slice(1)
                : ''}
            </span>
          </motion.div>
        </div>

        {/* gradient */}
        <motion.div
          className="absolute bottom-0 left-0 w-full opacity-100 z-40"
          style={{
            background: `linear-gradient(to top, ${
              isSweetBonanace
                ? '#F31579'
                : isDisorder
                  ? '#F3B415'
                  : isStarlightPrincess
                    ? '#AD15F3'
                    : isPandemicRising
                      ? '#18BC00'
                      : isBangkokHilton
                        ? '#E12200'
                        : isBreakout
                          ? '#B500E2'
                          : isBeeKeeper
                            ? '#B03B09'
                            : '#FB45AB'
            } 25%, transparent 100%)`,
          }}
          animate={{
            height: isHovering ? '100%' : '75%',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
        />

        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center z-30">
          {isSweetBonanace ? (
            <img
              src={`/slots/sweet-bonanace/item-bg-sweet-bonanace.webp`}
              className="h-[160px] object-cover mb-14 transition-all duration-300"
              alt={type}
            />
          ) : isDisorder ? (
            <img
              src={`/slots/disorder/item.webp`}
              alt={type}
              className="h-[280px] object-cover mt-24 transition-all duration-300 "
            />
          ) : isStarlightPrincess ? (
            <img
              src={`/slots/starlight-princess/item.webp`}
              alt={type}
              className="h-[230px] object-cover mt-8 transition-all duration-300 "
            />
          ) : isPandemicRising ? (
            <img
              src={`/slots/pandemic-rising/item.webp`}
              alt={type}
              className="h-[240px] object-cover mt-8 transition-all duration-300 "
            />
          ) : isBangkokHilton ? (
            <img
              src={`/slots/bangkok-hilton/item.webp`}
              alt={type}
              className="h-[220px] object-cover mt-4 transition-all duration-300 "
            />
          ) : isBreakout ? (
            <img
              src={`/slots/breakout/item.webp`}
              alt={type}
              className="h-[240px] object-cover mt-0 transition-all duration-300 "
            />
          ) : isBeeKeeper ? (
            <img
              src={`/slots/bee-keeper/item.webp`}
              alt={type}
              className="h-[200px] object-cover mt-4 transition-all duration-300 "
            />
          ) : (
            <img
              src={`/sportscard/Elvis.webp`}
              alt={type}
              className="h-[160px] object-cover mb-4 transition-all duration-300 "
            />
          )}
        </div>

        {/* Hover overlay with gradient color */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-[21]"
          style={{
            backgroundColor: isSweetBonanace
              ? '#F31579'
              : isDisorder
                ? '#F3B415'
                : isStarlightPrincess
                  ? '#AD15F3'
                  : isPandemicRising
                    ? '#18BC00'
                    : isBangkokHilton
                      ? '#4A90E2'
                      : isBreakout
                        ? '#FFD700'
                        : isBeeKeeper
                          ? '#FFC107'
                          : '#FB45AB',
          }}
          animate={{
            opacity: isHovering ? 0.1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
        />

        {/* Centered Play button - appears on hover */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] flex items-center justify-center "
          animate={{
            scale: isHovering ? 1.0 : 1.3,
            opacity: isHovering ? 1 : 0,
            filter: isHovering ? 'blur(0px)' : 'blur(8px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
        >
          <RiPlayFill className="w-[48px] h-[48px] cursor-pointer text-white mb-8" />
        </motion.div>

        {/* background */}
        <div className="absolute top-0 right-0 w-full h-full flex items-start justify-center z-20">
          <video
            ref={videoRef}
            src={
              isSweetBonanace
                ? `/slots/sweet-bonanace/bg.mp4`
                : isDisorder
                  ? `/slots/disorder/bg.mp4`
                  : isStarlightPrincess
                    ? `/slots/starlight-princess/bg.mp4`
                    : isPandemicRising
                      ? `/slots/pandemic-rising/bg.mp4`
                      : isBangkokHilton
                        ? `/slots/bangkok-hilton/bg.mp4`
                        : isBreakout
                          ? `/slots/breakout/bg.mp4`
                          : isBeeKeeper
                            ? `/slots/bee-keeper/bg.mp4`
                            : `/sportscard/background-le-king.webm`
            }
            className="h-full object-cover group-hover:scale-[1.1] transition-all duration-300"
            muted
            playsInline
            preload="metadata"
            loop={true}
            poster={
              isSweetBonanace ||
              isDisorder ||
              isStarlightPrincess ||
              isPandemicRising ||
              isBangkokHilton ||
              isBreakout ||
              isBeeKeeper
                ? undefined
                : `/sportscard/background-le-king.webp`
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SlotCardV2;
