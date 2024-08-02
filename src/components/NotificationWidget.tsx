import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useColorScheme } from "../utils/colorScheme";

const NotificationWidget: React.FC = () => {
  const { bgLight, text } = useColorScheme();

  return (
    <Box bg={bgLight} p="4" shadow="md" borderRadius="md">
      <Text fontWeight="bold" mb="2" color={text}>
        Notifications
      </Text>
      <VStack align="start" spacing={2}>
        <Text fontSize="sm" color={text}>
          You have 3 new messages
        </Text>
        <Text fontSize="sm" color={text}>
          Your report is ready
        </Text>
        <Text fontSize="sm" color={text}>
          Update available
        </Text>
      </VStack>
    </Box>
  );
};

export default NotificationWidget;
