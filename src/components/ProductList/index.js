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

export default function ProductList({ items }) {
  return (
    <Container>
      <ProductContainer>
        <ListContainer>
          {(items && items.length > 0) ? (
            <>
              {items.map((row) => (
                <Item key={row.id} item={row} />
              ))}
            </>
          ) : (items
              && items.length === 0) && <LabelBox>No items found.</LabelBox>}
        </ListContainer>
      </ProductContainer>
    </Container>
  );
}
