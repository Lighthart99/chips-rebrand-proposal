import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type SportsCardProps = {
  type?: string;
};

const SportsCard: React.FC<SportsCardProps> = ({ type }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isHovering) {
      const animate = (currentTime: number) => {
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = currentTime;
        }

        const deltaTime = currentTime - lastTimeRef.current;
        const rotationSpeed = 360 / 6000; // 6 seconds for full rotation

        setRotation(prev => prev + rotationSpeed * deltaTime);
        lastTimeRef.current = currentTime;

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        lastTimeRef.current = 0;
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
        <motion.div
          className="absolute -bottom-4 left-0 w-full h-1/3 flex items-center justify-center z-40 flex-col gap-1"
          animate={{
            y: isHovering ? -24 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
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

          <motion.div
            animate={{
              y: isHovering ? 0 : 24,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          >
            <img
              src={`/sportscard/play-arrow.svg`}
              alt="play"
              className="w-[40px] z-40"
            />
          </motion.div>
        </motion.div>

        {/* gradient */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0075DB] to-transparent opacity-100 z-30" />

        {/* image/video */}
        <div className="absolute top-0 right-0 w-full h-full flex items-start justify-center z-20">
          <img
            src={`/sportscard/soccer-image.webp`}
            alt={type}
            className="min-w-[305px] object-cover mt-2 group-hover:scale-[0.98] transition-all duration-300"
          />
        </div>

        {/* pattern bg */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={`/sportscard/bg-chips-pattern.svg`}
            alt="pattern"
            className="absolute -top-16 -left-16 min-w-[400px] min-h-[400px] z-10"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SportsCard;

