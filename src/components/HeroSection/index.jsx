import React, { useState } from 'react';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
import { Parallax } from 'react-scroll-parallax';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="videp/mp4" />
            </HeroBg>
            <HeroContent>
                <Parallax translateY={[-50, 50]}>
                    <HeroH1>Martin Abel Resume</HeroH1>
                    <HeroP>
                        Hi, I'm Martin Abel, an Argentinian student of web development. I've worked as a
                        Graphic/Web designer for 6+ years. Always eager to acquire more experience and skills.
                        Finished ReactJs course on CoderHouse.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="signup"
                            onMouseEnter={onHover}
                            onMouseLeaves={onHover}
                            primary="true"
                            dark="true"
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                            Start {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </Parallax>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
