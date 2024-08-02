import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import { useColorScheme } from "../utils/colorScheme";

const SettingsPage: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bgLight, text } = useColorScheme();

  return (
    <Layout tempAvatarStyle="adventurer">
      <VStack spacing={8} align="stretch">
        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>
            Settings
          </Heading>
          <VStack align="start" spacing={4}>
            <HStack justify="space-between" w="full">
              <Text>Dark Mode</Text>
              <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
            </HStack>
            <Divider />
            <HStack justify="space-between" w="full">
              <Text>Two-Factor Authentication</Text>
              <Button size="sm" colorScheme="green">
                Enable
              </Button>
            </HStack>
            <Divider />
            <HStack justify="space-between" w="full">
              <Text>Email Notifications</Text>
              <Switch />
            </HStack>
            <Divider />
            <HStack justify="space-between" w="full">
              <Text>Change Password</Text>
              <Button size="sm">Update</Button>
            </HStack>
            <Divider />
            <HStack justify="space-between" w="full">
              <Text>Language</Text>
              <Button size="sm">English</Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Layout>
  );
};

export default SettingsPage;
