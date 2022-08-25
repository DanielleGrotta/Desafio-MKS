import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-top: 20px;
`;

export const CardWrapper = styled.div`
    width: 217.56px;
    height: 253px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const CardImg = styled.img`
    height: 111px;
    width: 138px;
    margin-bottom: 10px;
`;

export const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-around;
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
`;

export const CardBtn = styled.button`
    display: flex;
    font-size: 1rem;
    border: none;
    background: #0F52BA;
    color: #fff;
    width: 100%;
    height: 2.6rem;
    transition: 0.2s ease-out;
    border-radius: 0px 0px 8px 8px;
    align-items: center;
    justify-content: center;
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
