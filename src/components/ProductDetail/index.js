import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import get from 'lodash.get';
import Axios from 'axios';
import {
  Container,
  DetailContainer,
  BodyContainer,
  DataContainerImage,
  DataContainerText,
  ItemImage,
  ItemName,
  ItemDescription,
  ItemPrice,
  ItemPriceValue,
  ItemPriceCurrency,
} from './ProductDetail.styled';
import { LoadingBox } from '../Common.styled';
import { useAppContext } from '../../libs/context-lib';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import ITEMS_API_URL from '../../libs/config';
import LoadingIcon from '../../assets/loading.svg';
import RelatedProducts from '../RelatedProducts';
import NoImage from '../../assets/no-image.png';
import { CURRENCY_SIGN } from '../../libs/constants';

export default function ProductDetail() {
  const { dispatch, state } = useAppContext();
  const routeMatch = useMatch('/items/:id');
  const [loading, setLoading] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const getProductById = async (id) => {
    setLoading(true);
    try {
      const response = await Axios({
        url: `${ITEMS_API_URL}/api/items/${id}`,
      });
      const product = get(response, 'data', {});
      dispatch({ type: APP_ACTIONS.SET_PRODUCT, data: product });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!state.product.id) {
      const id = get(routeMatch, 'params.id', null);
      if (id) {
        getProductById(id);
      }
    }
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingBox>
          <img src={LoadingIcon} alt="loading" />
        </LoadingBox>
      ) : (
        <DetailContainer>
          {state.product.id && (
            <>
              <BodyContainer>
                <DataContainerImage>
                  {state.product.image && state.product.image.url && !imageFailed ? (
                    <ItemImage src={get(state.product, 'image.url', '')} onError={() => setImageFailed(true)} />
                  ) : (
                    <ItemImage src={NoImage} alt="unavailable" />
                  )}
                </DataContainerImage>
                <DataContainerText>
                  <ItemName>{state.product.name}</ItemName>
                  <ItemDescription>
                    {state.product.description}
                  </ItemDescription>
                  <ItemPrice>
                    <ItemPriceValue>{state.product.price}</ItemPriceValue>
                    <ItemPriceCurrency>{CURRENCY_SIGN}</ItemPriceCurrency>
                  </ItemPrice>
                </DataContainerText>
              </BodyContainer>
              <RelatedProducts catId={state.product.catId} />
            </>
          )}
        </DetailContainer>
      )}
    </Container>
  );
}
