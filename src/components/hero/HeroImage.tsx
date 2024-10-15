import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fe098b6f846ca54a8c4c01aa07d4e6aaa39f3be92075a496f65ff01d8e12c62?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884" 
        alt="Happy pets and their owners" 
        className="object-contain grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
};

export default HeroImage;