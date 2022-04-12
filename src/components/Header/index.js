import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../libs/context-lib';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import QurableLogo from './Header.styled';
import QurableImage from '../../assets/qurableLogo.png';

export default function Header() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const goHome = () => {
    dispatch({ type: APP_ACTIONS.SET_PRODUCT_LIST, data: [] });
    navigate('/');
  };

  return <QurableLogo src={QurableImage} onClick={goHome} alt="Home" />;
}
