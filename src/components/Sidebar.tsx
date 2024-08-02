import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FiChevronLeft,
  FiGrid,
  FiHome,
  FiMenu,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Set the sidebar background color to white
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverBgColor = useColorModeValue("gray.200", "gray.700");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const MenuItem = ({
    icon,
    label,
    to,
  }: {
    icon: React.ElementType;
    label: string;
    to: string;
  }) => (
    <Tooltip label={isCollapsed ? label : ""} placement="right" hasArrow>
      <Link to={to} style={{ width: "100%" }}>
        <Button
          variant="ghost"
          w="full"
          justifyContent={isCollapsed ? "center" : "flex-start"}
          px={isCollapsed ? 0 : 4}
          py={6}
          _hover={{ bg: hoverBgColor }}
        >
          <Icon as={icon} boxSize={5} />
          {!isCollapsed && <Text ml={4}>{label}</Text>}
        </Button>
      </Link>
    </Tooltip>
  );

  return (
    <Box
      w={isCollapsed ? "60px" : "240px"}
      bg={bgColor}
      minH="100vh"
      position="relative"
      transition="width 0.2s"
      boxShadow="md"
    >
      <VStack align="stretch" spacing={0}>
        <HStack
          p={4}
          justifyContent={isCollapsed ? "center" : "space-between"}
          alignItems="center"
        >
          {!isCollapsed && (
            <Text fontSize="xl" fontWeight="bold">
              Dashboard
            </Text>
          )}
          <IconButton
            aria-label="Toggle Sidebar"
            icon={isCollapsed ? <FiMenu /> : <FiChevronLeft />}
            onClick={toggleSidebar}
            variant="ghost"
            size="md"
          />
        </HStack>
        <Divider />
        <MenuItem icon={FiHome} label="Home" to="/" />
        <MenuItem icon={FiGrid} label="Dashboard" to="/dashboard" />
        <MenuItem icon={FiUser} label="Profile" to="/profile" />
        <MenuItem icon={FiSettings} label="Settings" to="/settings" />
      </VStack>
    </Box>
  );
};

export default Sidebar;
