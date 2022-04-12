import React from 'react';
import {
  Container,
  ProductContainer,
  ListContainer,
} from './ProductList.styled';
import {
  LabelBox,
} from '../Common.styled';
import Item from './Item';
import { useAppContext } from '../../libs/context-lib';

export default function ProductList() {
  const { state } = useAppContext();

  return (
    <Container>
      <ProductContainer>
        <ListContainer>
          {(state.products && state.products.length > 0) ? (
            <>
              {state.products.map((row) => (
                <Item key={row.id} item={row} />
              ))}
            </>
          ) : (state.products
              && state.products.length === 0) && <LabelBox>No items found.</LabelBox>}
        </ListContainer>
      </ProductContainer>
    </Container>
  );
}
