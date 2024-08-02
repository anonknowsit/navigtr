import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useColorScheme } from "../utils/colorScheme";

interface WidgetProps {
  title: string;
}

const Widget: React.FC<WidgetProps> = ({ title }) => {
  const { bgLight, text } = useColorScheme();

  return (
    <Box bg={bgLight} p="4" shadow="md" borderRadius="md" color={text}>
      <Text fontWeight="bold">{title}</Text>
    </Box>
  );
};

export default Widget;
