import styled from 'styled-components';
export const sizes = {
  mobileS: '320px',
  mobileM: '481px',
  mobileMs: '481px',
  mobileL: '641px',
  tablet: '961px',
  laptop: '1025px',
  desktop: '1281px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileMs: `(min-width: ${sizes.mobileMs})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;

  @media ${devices.mobileS} {
    width: 86%;
  }

  @media ${devices.mobileM} {
    width: 90%;
  }

  @media ${devices.laptop} {
    width: 100%;
  }

`;

export const SidebarWrapper = styled.div`
  display:flex;

`;
export const BodyContainer = styled.div`
  display: flex;
`;

export const GraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFE;
  flex-wrap: wrap;

  
  @media ${devices.mobileS} {

    flex-direction:column;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    gap:20px;
  }
  
  @media ${devices.mobileM} {

    justify-content: center;
    align-content: center;
    justify-content: flex-center;
  }
  @media ${devices.mobileM} {

    flex-wrap: wrap;
    align-items: center;
  }

  @media ${devices.mobileL} {
    flex-direction:row;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  @media ${devices.laptop} {
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
  }
  
  @media ${devices.laptop} {
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    
  }

`;

export const TableWrapper = styled.div`
  
`;

export const BarWrapper = styled.div`
  width: 500px;
    
  @media ${devices.mobileS} {
    width: 300px;
  }
  @media ${devices.mobileL} {
    align-self: center;
  }

  @media ${devices.tablet} 
    width: 500px;
  }
`;
export const DoughnutWrapper = styled.div`
  width: 250px;
`;
export const PieWrapper = styled.div`
  width: 250px;
`;

