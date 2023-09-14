import { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const Page = () => {
  const [transactions, setTransactions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [tablesCount, setTablesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/transactions/recent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ key: 'value' }),
        });
  
        if (!response.ok) {
          console.log('Network response was not ok');
        }
  
        const data = await response.json();
        
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users/leaderboard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users/count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        setUsersCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/tables/count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        setTablesCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
  <>
    <Head>
      <title>
        Dashboard | SWC Poker Admin
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={0.1}
              positive
              sx={{ height: '100%' }}
              value="0.0 ETH"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={52}
              positive={true}
              sx={{ height: '100%' }}
              value={usersCount.toString()}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={tablesCount.toString()}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              positive={false}
              difference={0.1}
              value="0.0 ETH"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [0.9, 0.16, 0.5, 0.8, 0.3, 0.14, 0.14, 0.16, 0.17, 0.19, 0.18, 0.20]
                },
                {
                  name: 'Last year',
                  data: [0.12, 0.11, 0.4, 0.6, 0.2, 0.9, 0.9, 0.1, 0.11, 0.12, 0.13, 0.13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[98, 1, 1]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={leaderboard}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={transactions}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
