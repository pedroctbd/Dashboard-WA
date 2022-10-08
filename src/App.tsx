import React, { useEffect } from 'react';
import './fonts.css';
import BasicTable from './Components/datatable/Datatable';
import BarChart from './Components/graphs/BarChart';
import DoughnutChart from './Components/graphs/DoughnutChart';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import axios from "axios";

import { BarWrapper, BodyContainer, ContentContainer, DoughnutWrapper, GraphContainer, SidebarWrapper, TableWrapper, PieWrapper, Body, Content, Header, AppContainer } from './styles';
import PieChart from './Components/graphs/PieChart';

function App() {
  const [datatableValue, setDatatableValue] = React.useState();
  const [barChartValue, setBarChartValue] = React.useState(null);
  const [pieChartValue, setPieChartValue] = React.useState(0);
  const [doughnutGraphValue, setDoughnutGraphValue] = React.useState(0);
  const baseURL = "https://localhost:7112/api/";
  const client = axios.create({
    baseURL: baseURL
  });

  useEffect(() => {
    getDatatableValue();
    getBarChartValue();
    getPieChartValue();
    getDoughnutGraphValue();
  }, []);

  const getDatatableValue = () => {
    client.get("/pedido", {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjY1MTg3MTkzLCJleHAiOjE2NjU3OTE5OTMsImlhdCI6MTY2NTE4NzE5M30.RYrtpszNCp-cyGAHi-XjgnClmas1dWVx0QVS8UZhUG17VKdNGrf2vI1KSuOjtPkOv2F3k8SqFBz9s4brrHWKEw`
      }
    }).then((response) => {
      setDatatableValue(response.data);
    });
  }

  const getBarChartValue = () => {
    client.get("/pedido/top5", {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjY1MTg3MTkzLCJleHAiOjE2NjU3OTE5OTMsImlhdCI6MTY2NTE4NzE5M30.RYrtpszNCp-cyGAHi-XjgnClmas1dWVx0QVS8UZhUG17VKdNGrf2vI1KSuOjtPkOv2F3k8SqFBz9s4brrHWKEw`
      }
    }).then((response) => {
      setBarChartValue(response.data);
    });
  }
  const getPieChartValue = () => {
    client.get("/equipe", {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjY1MTg3MTkzLCJleHAiOjE2NjU3OTE5OTMsImlhdCI6MTY2NTE4NzE5M30.RYrtpszNCp-cyGAHi-XjgnClmas1dWVx0QVS8UZhUG17VKdNGrf2vI1KSuOjtPkOv2F3k8SqFBz9s4brrHWKEw`
      }
    }).then((response) => {
      setPieChartValue(response.data);
    });
  }

  const getDoughnutGraphValue = () => {
    client.get("/produto", {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjY1MTg3MTkzLCJleHAiOjE2NjU3OTE5OTMsImlhdCI6MTY2NTE4NzE5M30.RYrtpszNCp-cyGAHi-XjgnClmas1dWVx0QVS8UZhUG17VKdNGrf2vI1KSuOjtPkOv2F3k8SqFBz9s4brrHWKEw`
      }
    },
    ).then((response) => {
      setDoughnutGraphValue(response.data);
    });
  }

  return (
    <AppContainer>
      <Content>
        <Header><Navbar /></Header>
        <Body>
          <BodyContainer>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
            <ContentContainer>

              <GraphContainer>

                <PieWrapper> <PieChart data={pieChartValue} /></PieWrapper>
                <BarWrapper> <BarChart data={barChartValue} /></BarWrapper>
                <DoughnutWrapper> <DoughnutChart data={doughnutGraphValue} /></DoughnutWrapper>

              </GraphContainer>
              <TableWrapper>

                <BasicTable data={datatableValue} />
              </TableWrapper>
            </ContentContainer>
          </BodyContainer>
        </Body>
      </Content>


    </AppContainer>
  );
}

export default App;
