import styled from 'styled-components';
import themeConfig from '../../libs/theme';

const QurableLogo = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
    overflow: hidden;
    transition-duration: 0.8s;
    transition-property: transform;
    &:hover{
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
    @media (max-width: ${themeConfig.screen.large.maxWidthPx}px){
        margin-left: 30px;
    }    
`;

export default QurableLogo;
