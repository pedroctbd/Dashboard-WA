import styled from 'styled-components';
import { devices } from '../../styles';


export const TableHeader = styled.div`
    display: flex;
    @media ${devices.tablet} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-content: center;
    }

    @media ${devices.mobileS} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-content: center;
    }
    @media ${devices.laptop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const TableBodyContainer = styled.div`
    
    width: 100%;
    overflow-x: auto;
    @media ${devices.desktop} {
        min-height: 414px;
    }

    @media ${devices.laptop} {
        height: 414px;
    }

    @media ${devices.tablet} {
        height: 314px;
    }

`;

export const Text = styled.p`
    font-size:20px;

    @media ${devices.tablet} {
        padding-left:24px;
    }

    @media ${devices.mobileS} {
        font-size:20px;
        padding-left:12px;
    }

    @media ${devices.mobileL} {
    
        font-size:18px;
        padding-left:20px;
      }
`;

