import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: #EEEEEE;
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    position: absolute;
    bottom: 0;
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 0 40px;
`;

export const FooterText = styled.a`
    color: #000;
    justify-self: center;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    line-height:19px;
    font-weight: 400;
    text-decoration: none;
`;