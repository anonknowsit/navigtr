import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useColorScheme } from "../utils/colorScheme";

const Footer: React.FC = () => {
  const { bgLight, text } = useColorScheme();

  return (
    <Box bg={bgLight} color={text} textAlign="center" py={4} boxShadow="md">
      <Text>
        &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
