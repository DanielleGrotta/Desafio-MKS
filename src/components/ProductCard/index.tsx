import shop from './shop.svg';
import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import {
    CardGrid,
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

    const [products, setProducts] = useState<Product []>([]);
    interface Product {
        id: number;
        name: string;
        price: number;
        description: string;
        photo: string;
    }

    useEffect(() => {  
        ReqProd();
    }, []);

    async function ReqProd() {
        const response = await Axios.get('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
        setProducts(response.data.products);
    }



    return (
        <>
        <CardGrid>
            {products.map(products => ( 
                <CardContainer key={products.id}>
                    <CardWrapper>
                        <CardImg src={products.photo} />
                        <CardWrap>
                            <CardTitle>{products.name}</CardTitle>
                            <CardPrice>R$ {products.price}</CardPrice>
                        </CardWrap>
                        <CardDescription>{products.description}</CardDescription>
                    </CardWrapper>
                        <CardBtn>
                            <CardShopIcon src={shop} />COMPRAR
                        </CardBtn>
                </CardContainer>
            ))}
        </CardGrid>
            
        </>
    )
}
