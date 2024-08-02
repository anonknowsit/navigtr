import { Box, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { useColorScheme } from "../utils/colorScheme";

interface StatWidgetProps {
  label: string;
  value: string | number;
}

const StatWidget: React.FC<StatWidgetProps> = ({ label, value }) => {
  const { bgLight, text } = useColorScheme();

  return (
    <Box bg={bgLight} p="4" shadow="md" borderRadius="md" color={text}>
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
};

export default StatWidget;
