import React from "react";
import Hero from "./hero/page";
import EnterPrise from "./enterprise/page";
import GameChanger from "./gamechanger/page";

const Home = () => {
    return (
        <main className="bg-[#161616] overflow-auto py-8">
            {/* Hero Section */}
            <Hero />

            {/* EnterPrise Section */}
            <EnterPrise />

            {/* Game Changer Section */}
            <GameChanger />

        </main>
    );
};

export default Home;
