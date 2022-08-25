import shop from './shop.svg';
import test from './test.png';
import {
    CardContainer,
    CardWrapper,
    CardImg,
    CardWrap,
    CardTitle,
    CardPrice,
    CardDescription,
    CardBtn,
    CardShopIcon
} from './ProductCardElements';


export const Card = () => {


    return (
        <>
            <CardContainer>
                <CardWrapper>
                    <CardImg src={test}></CardImg>
                    <CardWrap>
                        <CardTitle>Card Title</CardTitle>
                        <CardPrice>R$ 100,00</CardPrice>
                    </CardWrap>
                    <CardDescription>bla bal bla balla</CardDescription>
                    <CardBtn><CardShopIcon src={shop}/>COMPRAR</CardBtn>
                </CardWrapper>
            </CardContainer>
        </>
    )
}
