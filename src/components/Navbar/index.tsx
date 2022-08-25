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
    SidebarWrap,
    SidebarTitle,
    ExitBtn,
    SidebarUl,
    SidebarLi,
    SidebarProductsCard

} from './NavbarElements';
import card  from './card.svg';

export const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavWrapper>
                        <NavLogo >MKS</NavLogo>
                        <NavLogoText >Sistemas</NavLogoText>
                    </NavWrapper>
                    
                    <NavBtn>
                        <NavBtnCart onClick={showSidebar} >
                            <CartImg src={card}></CartImg>
                            <NavBtnCartCount>0</NavBtnCartCount>
                        </NavBtnCart>
                    </NavBtn>
                </NavbarContainer>
                <SidebarContainer style={{width: sidebar ? '486px' : '0px' }}>
                    <SidebarWrap>
                        <SidebarTitle>Carrinho de compras</SidebarTitle>
                        <ExitBtn style={{display: sidebar ? 'block' : 'none' }} onClick={showSidebar}>X</ExitBtn>
                    </SidebarWrap>
                    <SidebarUl style={{display: sidebar ? 'block' : 'none' }}>
                        <SidebarLi>
                        <SidebarProductsCard style={{display: sidebar ? 'block' : 'none' }}  >
                        <ExitBtn >X</ExitBtn>
                            </SidebarProductsCard>
                        </SidebarLi>
                    </SidebarUl>
                </SidebarContainer>
            </Nav>
        </>
    )
};