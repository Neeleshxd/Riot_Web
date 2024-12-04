import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import HamburgerButton from './Hamburger'; 
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['GameInfo', 'News', 'Leaderboards', 'OurSocials', 'Support'];
const tracks = [
  "audio/loop.mp3",
  "audio/loop.2.mp3",
  "audio/loop3.mp3",
];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="fixed inset-x-0 top-0 z-50 border-none transition-all duration-700">
      <header className="w-full bg-black">
        <nav className="flex items-center justify-between p-2 md:p-4 bg-black rounded-md md:rounded-lg mx-2 md:mx-4">
          <div className="flex items-center gap-4 md:gap-6">
            <img src="img/logo.webp" alt="logo" className="w-16 h-auto md:w-20" />
            <img src="img/logo.2.png" alt="logo 2" className="w-8 md:w-10" />
          </div>
          <div className="md:hidden flex items-center">
            {/* Hamburger Menu */}
            <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                className="nav-hover-btn text-white text-sm md:text-base"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
            <Button
              id="Play-button"
              title="Play Now"
              rightIcon={<TiLocationArrow />}
              containerClass="px-5 py-2 text-sm md:px-6 md:py-3 md:text-base"
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
                    className={`indicator-line ${
                      isAudioPlaying ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start gap-4 p-4">
            <button
              className="text-xl self-end"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            {navItems.map((item) => (
              <a
                key={item}
                className="text-base font-semibold"
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              id="Play-button-mobile"
              title="Play Now"
              rightIcon={<TiLocationArrow />}
              containerClass="px-5 py-2 text-base"
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
                    className={`indicator-line ${
                      isAudioPlaying ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
