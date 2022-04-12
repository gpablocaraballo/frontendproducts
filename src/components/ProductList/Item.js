import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import get from 'lodash.get';
import {
  ListItem,
  ItemThumbNail,
  ItemName,
  ItemPrice,
  ItemPriceValue,
  ItemPriceCurrency,
} from './ProductList.styled';
import NoImage from '../../assets/no-image.png';
import { useAppContext } from '../../libs/context-lib';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import { CURRENCY_SIGN } from '../../libs/constants';

export default function Item({ item = {} }) {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [imageFailed, setImageFailed] = useState(false);

  const onItemClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch({ type: APP_ACTIONS.SET_PRODUCT, data: item });
    navigate(`/items/${item.id}`);
  };

  return (
    <ListItem onClick={onItemClicked}>
      {item.image && !imageFailed ? (
        <ItemThumbNail src={get(item, 'image.url', '')} onError={() => setImageFailed(true)} />
      ) : (
        <ItemThumbNail src={NoImage} alt="unavailable" />
      )}
      <ItemName>{item.name}</ItemName>
      <ItemPrice>
        <ItemPriceValue>{item.price}</ItemPriceValue>
        <ItemPriceCurrency>{CURRENCY_SIGN}</ItemPriceCurrency>
      </ItemPrice>
    </ListItem>
  );
}
