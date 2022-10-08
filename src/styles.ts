import styled from 'styled-components';
export const sizes = {
  mobileS: '320px',
  mobileM: '481px',
  mobileL: '641px',
  tablet: '961px',
  laptop: '1025px',
  desktop: '1281px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const AppContainer = styled.div`

  font-family: 'Poppins', sans-serif;
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  height: 100vh;
  background-color: #F4F6FC;

`;
export const Content = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  flex-direction: column;

`;
export const Header = styled.header`


`;

export const Body = styled.body`
  display: flex;
  flex: 1 1 100%;
  flex-flow: column;
  background-color: #FFFFFE;
  border-radius: 4px 0px 0px 0px;
  margin: 0;

`;

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
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    
  }

`;

export const TableWrapper = styled.div`
  
`;

export const BarWrapper = styled.div`
 
    
  @media ${devices.mobileS} {
    width: 300px;
  }
  @media ${devices.mobileL} {
    align-self: center;
    width: 500px;
  }

  width: 500px;
  
`;
export const DoughnutWrapper = styled.div`
  width: 250px;
`;
export const PieWrapper = styled.div`
  width: 250px;
`;

