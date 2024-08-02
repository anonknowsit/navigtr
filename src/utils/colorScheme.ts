import { useColorModeValue } from "@chakra-ui/react";

export const useColorScheme = () => {
  return {
    bgLight: useColorModeValue("white", "gray.800"),
    bgDark: useColorModeValue("#f7f7f7", "#2D3748"),
    text: useColorModeValue("gray.800", "white"),
  };
};
