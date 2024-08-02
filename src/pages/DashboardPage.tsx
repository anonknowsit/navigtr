import { Box, Grid, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import BarChart from "../components/BarChart";
import Layout from "../components/Layout";
import LineChart from "../components/LineChart";
import StatWidget from "../components/StatWidget";
import Widget from "../components/Widget";
import { useColorScheme } from "../utils/colorScheme";

const DashboardPage: React.FC = () => {
  const { bgLight } = useColorScheme();

  return (
    <Layout tempAvatarStyle="adventurer">
      <Heading mb={4}>Dashboard</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <SimpleGrid columns={2} spacing={4}>
            <StatWidget label="Users" value="1,200" />
            <StatWidget label="Revenue" value="$34,000" />
            <StatWidget label="New Signups" value="150" />
            <Widget title="Widget 1" />
            <Widget title="Widget 2" />
            <Widget title="Widget 3" />
          </SimpleGrid>
          <Box mt={4} bg={bgLight} borderRadius="md">
            <center>
              <LineChart />
            </center>
          </Box>
          <Box mt={4} bg={bgLight} borderRadius="md">
            <center>
              <BarChart />
            </center>
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
