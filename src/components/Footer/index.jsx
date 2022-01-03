import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
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
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Carrers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>  

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instragram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>  
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Mandroguini
                        </SocialLogo>
                        <WebsiteRights>Mandroguin © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
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
