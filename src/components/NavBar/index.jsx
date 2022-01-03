import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import { 
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavBarElements'


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Martin Abel</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>

                            <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >About Me</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                    to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Projects</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Studies</NavLinks>
                            </NavItem>
                            
                            <NavItem>
                                <NavLinks 
                                    to="signup"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Experience</NavLinks>
                            </NavItem>

                        </NavMenu>

                        
                    </NavBarContainer> 
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
