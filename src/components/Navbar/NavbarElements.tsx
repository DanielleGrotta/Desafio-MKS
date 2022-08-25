import styled from 'styled-components';

export const Nav = styled.nav`
    background: #0F52BA;
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 40px;
`;

export const NavWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
`;

export const NavLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 40px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 600;
    text-decoration: none;
`;

export const NavLogoText = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    line-height:19px;
    font-weight: 300;
    text-decoration: none;
`;


export const NavBtn = styled.button`
    position: absolute;
    width: 90px;
    height: 45px;
    left: 1262px;
    top: 29px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }

`;

export const NavBtnCart = styled.a`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 7px;
    cursor: pointer;
    color: #000;
    font-size: 1.5rem;
    text-decoration: none;
`;

export const NavBtnCartCount = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 15px;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

export const CartImg = styled.img`
    width: 30px;
    height: 30px;
`;

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0F52BA;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
`;

export const SidebarUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    &:hover {
        color: #000;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarProductsCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;

    &:hover {
        color: #000;
        transition: 0.2s ease-in-out;
    }
`;


