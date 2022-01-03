import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="about" onClick={toggle}>
                        About Me
                    </SidebarLink>

                    <SidebarLink to="discover" onClick={toggle}>
                        Projects
                    </SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>
                        Studies
                    </SidebarLink>

                    <SidebarLink to="signup" onClick={toggle}>
                        Experience
                    </SidebarLink>

                </SidebarMenu>
               
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
