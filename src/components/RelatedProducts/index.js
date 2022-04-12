/* eslint-disable react/no-array-index-key */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import get from 'lodash.get';
import Axios from 'axios';
import ITEMS_API_URL from '../../libs/config';
import LoadingIcon from '../../assets/loading.svg';
import {
  Container,
  ProductContainer,
  ListContainer,
  LoadingImage,
} from './RelatedProducts.styled';
import Item from '../ProductList/Item';
import { MAX_RELATED_ITEMS } from '../../libs/constants';

export default function RelatedProducts({ catId }) {
  const observer = useRef();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(false);

  const getRelatedItems = async () => {
    setLoadingRelated(true);
    try {
      const response = await Axios({
        url: `${ITEMS_API_URL}/api/related/${catId}`,
      });
      const newItems = get(response.data, 'items', []);
      setRelatedProducts([...relatedProducts, ...newItems]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingRelated(false);
    }
  };

  const lastBookElementRef = useCallback(
    (node) => {
      if (loadingRelated) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (!loadingRelated
          && entries[0].isIntersecting
          && relatedProducts.length < MAX_RELATED_ITEMS
        ) {
          getRelatedItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingRelated],
  );

  useEffect(() => {
    getRelatedItems();
  }, []);

  return (
    <Container>
      <ProductContainer>
        <ListContainer>
          {(relatedProducts && relatedProducts.length > 0) && (
            <>
              {relatedProducts.map((row, i) => {
                const isLastElement = relatedProducts.length === i + 1;
                return isLastElement
                  ? <div key={(i + row.id)} ref={lastBookElementRef}><Item item={row} /></div>
                  : <Item key={(i + row.id)} item={row} />;
              })}
            </>
          )}
        </ListContainer>
        {(loadingRelated) && <LoadingImage src={LoadingIcon} alt="Loading related products" />}
      </ProductContainer>
    </Container>
  );
}
