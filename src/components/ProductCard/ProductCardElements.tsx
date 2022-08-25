import styled from "styled-components";




export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 29px 0px;
    margin-top: 20px;
    justify-items: center;
    width: 88%;
    margin: 0 auto;
    margin-top: 6rem;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const CardContainer = styled.div`
    width: 260px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 10px;
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px black;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    padding: 0px 20px;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;
`;

export const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;

export const CardTitle = styled.h1`
    font-size: 16px;
    color: #000;
    font-size: 400;
`;

export const CardPrice = styled.h2`
    font-size: 15px;
    margin-bottom: 10px;
    background: #373737;
    border-radius: 5px;
    font-weight: 700;
    padding: 5px;
    color: white;
`;

export const CardDescription = styled.p`
    font-size: 10px;
    text-align: center;
    margin-bottom: 15px;
`;

export const CardBtn = styled.button`
    display: flex;
    font-size: 1rem;
    border: none;
    background: #0F52BA;
    color: #fff;
    width: 304px;
    height: 2.6rem;
    transition: 0.2s ease-out;
    border-radius: 0px 0px 8px 8px;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const CardShopIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;
