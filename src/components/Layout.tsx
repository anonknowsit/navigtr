import { Box, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

interface LayoutProps {
  children: React.ReactNode;
  tempAvatarStyle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, tempAvatarStyle }) => {
  const contentBgColor = useColorModeValue("#f7f7f7", "#2D3748");

  // Mocked user data (replace with actual user data when authentication is implemented)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: `https://api.dicebear.com/6.x/${tempAvatarStyle}/svg?seed=John%20Doe`,
  };

  return (
    <Flex minH="100vh">
      <Sidebar />
      <Flex direction="column" flex="1" bg={contentBgColor}>
        <Flex
          p={4}
          bg={useColorModeValue("white", "gray.800")}
          alignItems="center"
          boxShadow="sm"
        >
          <Spacer />
          <UserMenu
            name={user.name}
            email={user.email}
            avatarUrl={user.avatarUrl}
          />
        </Flex>
        <Box flex="1" p="4">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
