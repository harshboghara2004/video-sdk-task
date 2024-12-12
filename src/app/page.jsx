import React from "react";
import Hero from "./Components/HeroSection/Hero";
import EnterPrise from "./Components/EnterPriseSection/EnterPrise";

const Home = () => {
    return (
        <main className="bg-[#161616] w-screen h-screen overflow-auto py-8">
            {/* Hero Section */}
            <Hero />

            {/* EnterPrise Section */}
            <EnterPrise />
        </main>
    );
};

export default Home;
