import React, { useRef, useState } from 'react'
const BentoTilt = ({children,className}) =>{
  const [trasnfromStyle ,setTransformStyle] = useState('');
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateX = -(y / rect.height) * 10; // Adjust the sensitivity by changing the divisor
    const rotateY = (x / rect.width) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };
  const handleMouseLeave = () => {
    // Reset transformation when mouse leaves the element
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };
  return (
    <div className={className}ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
    style={{transform:trasnfromStyle}}>
      {children}
    </div>
  )
}
const BentoCard = ({src,title,description})=>{
    return (
        <div className='relative size-full'>
            <video
            src={src}
            loop
            muted 
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 fleex size-full flex-col justify-between p-5 text-blue-50
            '>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && (
                       <p className='mt-3 max-w-64 text-xs md:text-base text-gray-500'>{description}</p> 
                    )}
                </div>

            </div>
    </div>
    )
}
const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
            <p className='font-circular-web text-lg text-blue-50'>DEFY THE LIMITS </p>
            <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush</p>
            </div>
      <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
         <BentoCard src="videos/feature-1.mp4" title={<>V<b>A</b>ritey</>} 
         description="This is the range of games coming from our Riot house straight to you.
      "/>
      </BentoTilt>
      <div className="grid min-h-screen grid-cols-2 grid-rows-3 gap-7">

        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard 
            src="videos/feature-2.mp4"
            title={<>R<b>a</b>nked</>}
            description="Enter the fields of Ranks,where each game is a stake of pushing you to the Ranks of what you deserve.Show case your skills
            and climb to Radaint to show us you can be the best in the game."/>
        </BentoTilt>
        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
          <BentoCard 
          src="videos/feature-3.mp4"
          title={<>Esp<b>o</b>rts</>}
          description="Dive in the world of Esports compete youserlf or watch your favourite teams fight for the champions trophy to make it to the title of World Champion."/>

        </BentoTilt>
        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
          <BentoCard 
          src="videos/feature-4.mp4"
          title={<>C<b>o</b>llections</>}
          description="Our ingame Collections made by our designers just to make your gaming experience one notch higher .Dive in game and crush your enemies with these immersive skins and there finishers"/>
        </BentoTilt>

          <BentoTilt 
    className="bento-tilt_1 md:col-span-2 md:row-span-2 place-self-center  w-full h-[75vh]"
  >
    <BentoCard
      src="videos/feature-5.mp4"
      title={<>O<b>u</b>r Devs</>}
      description="Get updates about the upcoming patch straight from our developers and officials."
    />
  </BentoTilt>
        
      </div>

      
      </div>
    </section>
  )
}

export default Features
