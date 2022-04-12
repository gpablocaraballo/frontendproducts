import styled, { css } from 'styled-components';
import LoadingIcon from '../../assets/loading-icon.svg';
import SearchIcon from '../../assets/search-solid.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const SearchInput = styled.input`
    width: 300px;
    box-shadow: 1px 1px 10px 1px black;
    border: 1px solid gray;
    padding: 9px 8px 8px 25px;
    border-radius: 10px;
    border-left: 10px solid transparent;
    background: url(${SearchIcon}) no-repeat left;    
    ${(props) => props.loading
        && css`
        border-left: 10px solid transparent;
        background: url(${LoadingIcon}) no-repeat left;
    `}       
`;

export const Loading = styled.img`
    width: 30px;
    margin-left: -35px;
    height: 30px;
`;

export const CleanButton = styled.img`
    width: 30px;
    margin-left: -35px;
    height: 30px;
    cursor: pointer;
`;
