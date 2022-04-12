import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import get from 'lodash.get';
import trim from 'lodash.trim';
import Axios from 'axios';
import {
  Container,
  SearchInput,
  CleanButton,
} from './ProductSearch.styled';
import ITEMS_API_URL from '../../libs/config';
import { DEBOUNCE_DELAY } from '../../libs/constants';
import { useAppContext } from '../../libs/context-lib';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import ResetIcon from '../../assets/delete-left-solid.svg';

const isFilled = (text) => (trim(text) !== '');

export default function ProductSearch() {
  const { dispatch } = useAppContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filteredText, setFilteredText] = useState('');
  const [loading, setLoading] = useState(false);

  const onCleanField = () => {
    setFilteredText('');
    dispatch({ type: APP_ACTIONS.SET_PRODUCT_LIST, data: [] });
    navigate('/');
  };

  const getItems = async (q = '') => {
    setLoading(true);
    try {
      const response = await Axios({
        url: `${ITEMS_API_URL}/api/items/?q=${q}`,
      });
      setLoading(false);
      dispatch({ type: APP_ACTIONS.SET_PRODUCT_LIST, data: get(response.data, 'items', []) });
      navigate(`/items?search=${q}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      setLoading(false);
    }
  };

  const delayedSearch = useCallback(
    debounce((q) => getItems(q), DEBOUNCE_DELAY),
    [],
  );

  const searchText = (text) => {
    setFilteredText(text);
    if (trim(text) === '') {
      dispatch({ type: APP_ACTIONS.SET_PRODUCT_LIST, data: null });
    } else {
      delayedSearch(text);
    }
  };

  const onNameFilterChange = (e) => {
    const text = e.target.value;
    searchText(text);
  };

  useEffect(() => {
    const text = searchParams.get('search');
    if (text) {
      searchText(text);
    }
  }, []);

  return (
    <Container>
      <SearchInput type="text" placeholder="Type name or description" onChange={onNameFilterChange} value={filteredText} loading={loading ? 1 : 0} />
      {isFilled(filteredText) && <CleanButton src={ResetIcon} alt="Clean text" onClick={onCleanField} />}
    </Container>
  );
}
