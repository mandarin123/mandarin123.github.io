import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights,
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Martin Abel Resume
                        </SocialLogo>
                        <WebsiteRights>Martin Abel © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.github.com/mandarin123" target="_blank" arial-label="Facebook">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/martinabel1987/" target="_blank" arial-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer;
