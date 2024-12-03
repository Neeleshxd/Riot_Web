import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import HamburgerButton from './Hamburger'; 
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['GameInfo', 'News', 'Leaderboards', 'OurSocials', 'Support'];
const tracks = [
  "/audio/loop.mp3",
  "/audio/loop.2.mp3",
  "/audio/loop3.mp3",
];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); 
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const handleTrackEnd = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.src = tracks[currentTrackIndex];
      if (isAudioPlaying) {
        audioElementRef.current.play();
      }
    }
  }, [currentTrackIndex, isAudioPlaying]);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-11 border-none transition-all duration-700">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between p-3 bg-black">
          <div className="flex items-center gap-7">
            <img src="/img/logo.webp" alt="logo" className="w-20 h-30" />
            <div>
              <img src="/img/logo.2.png" alt="logo 2" className="w-10" />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            {/* Use the imported HamburgerButton component */}
            <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            }  md:h-full items-center md:gap-7 flex-col absolute top-full right-0 w-3/4 bg-black md:relative md:block transform transition-all duration-500`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                className="nav-hover-btn text-white p-2"
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)} 
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 relative">
            {/* Place the Play Now button here */}
            <Button
              id="Play-button"
              title="Play Now"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-red-600 flex items-center justify-center gap-1 p-2 absolute left-0 md:left-auto"
            />
            <div className="flex items-center">
              <button
                className="flex items-center"
                onClick={toggleAudioIndicator}
              >
                <span className="text-white">
                  {isAudioPlaying ? "Pause " : "Music"}
                </span>
              </button>
              <div className="flex space-x-1 ml-2">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <audio
        ref={audioElementRef}
        className="hidden"
        onEnded={handleTrackEnd}
        loop={false}
      />
    </div>
  );
};

export default Navbar;
