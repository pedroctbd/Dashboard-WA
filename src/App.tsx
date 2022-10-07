import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import './App.css';
import BasicTable from './Components/datatable/Datatable';
import BarChart from './Components/graphs/BarChart';
import DoughnutChart from './Components/graphs/DoughnutChart';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import axios from "axios";

import { BarWrapper, BodyContainer, ContentContainer, DoughnutWrapper, GraphContainer, SidebarWrapper, TableWrapper, PieWrapper } from './styles';
import PieChart from './Components/graphs/PieChart';

function App() {
  const [post, setPost] = React.useState(null);
  const [datatableValue, setDatatableValue] = React.useState(null);
  const [barGraphValue, setBarGraphValue] = React.useState(null);
  const [doughnutGraphValue, setDoughnutGraphValue] = React.useState(null);
  const baseURL = "https://localhost:7112/api/";
  const client = axios.create({
    baseURL: baseURL
  });

  useEffect(() => {
    getDatatableValue();
    getBarGraphValue();
    getDoughnutGraphValue();
  }, []);

  const getDatatableValue = () => {
    client.get("/pedido", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': 'true'
      }
    }).then((response) => {
      setDatatableValue(response.data);
    });
  }

  const getBarGraphValue = () => {
    client.get("/equipe").then((response) => {
      setBarGraphValue(response.data);
    });
  }

  const getDoughnutGraphValue = () => {
    client.get("/produto",
    ).then((response) => {
      setDoughnutGraphValue(response.data);
    });
  }

  console.log(doughnutGraphValue);
  console.log(datatableValue);
  return (
    <div className="App">
      <div className="content">

        <header><Navbar /></header>
        <body>
          <BodyContainer>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
            <ContentContainer>

              <GraphContainer>

                <PieWrapper> <PieChart /></PieWrapper>
                <BarWrapper> <BarChart /></BarWrapper>
                <DoughnutWrapper> <DoughnutChart /></DoughnutWrapper>

              </GraphContainer>
              <TableWrapper>

                <BasicTable />
              </TableWrapper>
            </ContentContainer>
          </BodyContainer>
        </body>
      </div>


    </div>
  );
}

export default App;
