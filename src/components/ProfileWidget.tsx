import {
  Avatar,
  Box,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useColorScheme } from "../utils/colorScheme";

const ProfileWidget: React.FC = () => {
  const { bgLight, text } = useColorScheme();

  return (
    <Box bg={bgLight} p="4" shadow="md" borderRadius="md">
      <HStack spacing={4}>
        <Avatar name="John Doe" src="https://bit.ly/broken-link" />
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold" color={text}>
            John Doe
          </Text>
          <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
            john.doe@example.com
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProfileWidget;
