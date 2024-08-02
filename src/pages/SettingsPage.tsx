import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import { useColorScheme } from "../utils/colorScheme";

const HomePage: React.FC = () => {
  const { bgLight } = useColorScheme();

  return (
    <Layout tempAvatarStyle="adventurer">
      <VStack spacing={8} align="stretch">
        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>
            Welcome to My Dashboard
          </Heading>
          <Text>
            Welcome back, John Doe! Here's a quick overview of your account and
            recent activities.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {["Total Users", "Revenue", "New Signups"].map((label, index) => (
            <Box
              key={index}
              bg={bgLight}
              p={6}
              borderRadius="lg"
              boxShadow="md"
            >
              <Heading size="md">{label}</Heading>
              <Text fontSize="2xl" fontWeight="bold" mt={2}>
                {index === 1 ? "$34,000" : index === 2 ? "150" : "1,200"}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>
            Recent Activities
          </Heading>
          <VStack align="start" spacing={3}>
            <Text>- You have 3 new messages</Text>
            <Text>- Your report is ready</Text>
            <Text>- Update available</Text>
          </VStack>
        </Box>

        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>
            Quick Links
          </Heading>
          <HStack spacing={4}>
            <Button colorScheme="blue" as="a" href="/dashboard">
              Go to Dashboard
            </Button>
            <Button colorScheme="green" as="a" href="/profile">
              View Profile
            </Button>
            <Button colorScheme="purple" as="a" href="/settings">
              Settings
            </Button>
          </HStack>
        </Box>

        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>
            Announcements
          </Heading>
          <VStack align="start" spacing={3}>
            <Text>- New feature release: Dark Mode</Text>
            <Text>- Maintenance scheduled for this weekend</Text>
            <Text>- Welcome our new team member, Jane Doe</Text>
          </VStack>
        </Box>
      </VStack>
    </Layout>
  );
};

export default HomePage;
