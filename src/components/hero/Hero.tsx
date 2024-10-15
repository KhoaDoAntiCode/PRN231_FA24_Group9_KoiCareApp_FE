import React from 'react';
import Button from './Button';
import HeroImage from './HeroImage';

interface PetAdoptionHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const PetAdoptionHero: React.FC<PetAdoptionHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="overflow-hidden pt-20 pl-20 rounded-none bg-[linear-gradient(103deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch my-auto -mr-20 w-full text-base font-medium max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-extrabold leading-none capitalize text-sky-950 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              {title}
            </h1>
            <h2 className="mt-1 mr-7 text-5xl font-bold leading-tight capitalize text-sky-950 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              {subtitle}
            </h2>
            <p className="mt-6 leading-6 text-gray-800 max-md:max-w-full">
              {description}
            </p>
            <div className="flex gap-5 mt-9 max-w-full w-[344px]">
              <Button variant="outline" icon="arrow-right">
                View Intro
              </Button>
              <Button variant="solid">Explore Now</Button>
            </div>
          </div>
        </div>
        <HeroImage />
      </div>
    </section>
  );
};

export default PetAdoptionHero;