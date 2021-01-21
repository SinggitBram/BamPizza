import React from "react";
import Navbar from "../Navbar";
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,
} from "./HeroElements";

export const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Best Pizza in Town</HeroH1>
                    <HeroP>Ready in 10 Minutes</HeroP>
                    <HeroBtn>Order Here</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};
