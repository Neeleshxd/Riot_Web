import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import ButtonWithoutBorder from './ButtonwithoutBorder';

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-6 pb-12">
        {/* Header Section */}
        <div className="max-w-screen-md text-center md:text-left">
          <p className="text-sm uppercase font-circular-web text-violet-50 md:text-lg mt-2">
            CREATIVITY IS YOUR GREATEST WEAPON
          </p>
          <p className="mt-2 text-sm font-general leading-relaxed text-gray-300 md:text-base">
            More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine.
            <br />
            No two Agents play alike, just as no two highlight reels will look the same.
          </p>
        </div>

        {/* Animated Title and Image Section */}
        <div className="relative size-full mt-4 md:mt-5">
          <AnimatedTitle
            title="Our Agents"
            containerClass="mt-2 pointer-events-none mix-blend-difference relative z-10 text-white md:text-shadow-lg text-shadow-md"
          />
          <div className="story-img-container mt-4 md:mt-5">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="img/entrance.jpg"
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseMove}
                  onMouseMove={handleMouseMove}
                  alt="Entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-8">
          <p className="text-sm max-w-md text-center font-circular-web text-violet-50 md:text-right md:max-w-lg md:mr-10 mb-6">
            To know more about our Radiant agents, click below.
          </p>
          <ButtonWithoutBorder
            id="relam-button"
            title="View Agents"
            containerClass="mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
