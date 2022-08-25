import React,{ useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavWrapper,
    NavLogo,
    NavLogoText,
    NavBtn,
    NavBtnCart,
    CartImg,
    NavBtnCartCount,
    SidebarContainer,
    SidebarUl,
    SidebarLi,
    SidebarProductsCard

} from './NavbarElements';
import card  from './card.svg';

export const Navbar = () => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavWrapper>
                        <NavLogo >MKS</NavLogo>
                        <NavLogoText >Sistemas</NavLogoText>
                    </NavWrapper>
                    
                    <NavBtn>
                        <NavBtnCart >
                            <CartImg src={card}></CartImg>
                            <NavBtnCartCount>0</NavBtnCartCount>
                        </NavBtnCart>
                    </NavBtn>
                </NavbarContainer>
                <SidebarContainer>
                    <SidebarUl>
                        <SidebarLi>
                        <SidebarProductsCard />
                        </SidebarLi>
                    </SidebarUl>
                </SidebarContainer>
            </Nav>
        </>
    )
};