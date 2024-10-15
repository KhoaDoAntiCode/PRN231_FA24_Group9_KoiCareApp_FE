import PetAdoptionHero from "@/components/hero/Hero";
import PetCardList from "@/components/pet/petcards/PetList";
import WhatsNew from "@/components/pet/petcards/WhatNews";

const Home = () => {
    return (
        <div className="m-10 pl-10 pr-10">
            <PetAdoptionHero
                title="One more friend"
                subtitle="Thousands more fun!"
                description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
            />

            <WhatsNew />

            <PetCardList />
        </div>
    );
};

export default Home;
