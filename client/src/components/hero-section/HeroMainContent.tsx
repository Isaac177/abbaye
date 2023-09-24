import React from "react";
import HeroSlider, {MenuNav, Slide} from "hero-slider";
import Wrapper from "./slider/Wrapper.tsx";
import Title from "./slider/Title.tsx";
import Subtitle from "./slider/Subtitle.tsx";
import eglise from "../../assets/images/eglise.jpeg";
import chevet1 from "../../assets/images/chevet-eglise-2.jpg";
import chevet2 from "../../assets/images/chevet-eglise.jpg";
import heroBg from "../../assets/images/hero-bg.jpeg";
import CustomOverlay from "./slider/CustomOverlay.tsx";

const HeroMainContent: React.FC = () => {

    return (
        <HeroSlider
            height={"100vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
        >
            <CustomOverlay className="filter brightness-50">
                <Wrapper>
                    <Title>Abbaye du Mont des Cats</Title>
                    <Subtitle>
                        Ecce Elongavi Fugiens Atque Mansi In Solitudine
                    </Subtitle>
                </Wrapper>
            </CustomOverlay>

            <Slide
                shouldRenderMask
                label="Messe - Benediction Abbatiale"
                background={{
                    backgroundImageSrc: eglise
                }}
                style={{
                    position: 'relative'
                }}
            >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-main-color via-more-lighter-shade to-transparent"></div>
            </Slide>

            <Slide
                shouldRenderMask
                label="Abbaye - Vue du Chevet"
                background={{
                    backgroundImageSrc: chevet1
                }}
                style={{
                    position: 'relative'
                }}
            >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-main-color via-more-lighter-shade to-transparent"></div>
            </Slide>

            <Slide
                shouldRenderMask
                label="Abbaye - Vue du Chevet"
                background={{
                    backgroundImageSrc: chevet2
                }}

            style={{
            position: 'relative'
        }}
            >
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-main-color via-more-lighter-shade to-transparent"></div>
            </Slide>

            <Slide
                shouldRenderMask
                label="Messe - Benediction Abbatiale"
                background={{
                    backgroundImageSrc: heroBg
                }}
                style={{
                    position: 'relative'
                }}
            >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-main-color via-more-lighter-shade to-transparent"></div>
            </Slide>

            <MenuNav />
        </HeroSlider>
     )
};

export default HeroMainContent;