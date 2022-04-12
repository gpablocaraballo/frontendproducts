import styled from 'styled-components';
import themeConfig from '../../libs/theme';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: ${themeConfig.maxWidthContainerPx}px;
    min-height: 350px;
    justify-content: center;
    background-color: white;
    box-shadow: 1px 1px 10px 1px black;
    padding: 15px;
    margin: 20px;
`;

export const DetailContainer = styled.div`
    width: 100%;
    max-width: ${themeConfig.maxWidthContainerPx}px;
    box-shadow: 1px 1px 10px 1px white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;    
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    padding: 15px;
    @media (max-width: ${themeConfig.screen.medium.maxWidthPx}px){
        flex-direction: column;
        height: 620px;
        align-items: center;
    }    
`;

export const DataContainerImage = styled.div`
    width: 50%;
    height: 350px;
    display: flex;
    justify-content: center;
`;

export const DataContainerText = styled.div`
    width: 40%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const ItemImage = styled.img`
    max-width: 300px;
`;

export const ItemName = styled.div`
    color: ${themeConfig.color.Items};
    font-weight: 400;
    font-size: 30px;
`;

export const ItemDescription = styled.div`
color: ${themeConfig.color.Items};
font-weight: 400;
font-size: 16px;
margin-top: 15px;
margin-bottom: 15px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
@supports (-webkit-line-clamp: 8) {
  white-space: initial;
  -webkit-line-clamp: 8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
@media (max-width: ${themeConfig.screen.medium.maxWidthPx}px){
    @supports (-webkit-line-clamp: 3) {
        white-space: initial;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
}
`;

export const ItemPrice = styled.div`
    display: flex;
`;

export const ItemPriceValue = styled.div`
    color: ${themeConfig.color.Price};
    font-weight: 700;
    font-size: 20px;
`;

export const ItemPriceCurrency = styled(ItemPriceValue)`
    margin-left: 5px;
`;
