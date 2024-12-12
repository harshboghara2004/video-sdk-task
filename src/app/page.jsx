import React from "react";
import Hero from "./Components/HeroSection/Hero";
import EnterPrise from "./Components/EnterPriseSection/EnterPrise";

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <Hero />

            {/* EnterPrise Section */}
            <EnterPrise />
        </main>
    );
};

export default Home;
