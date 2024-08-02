import {
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useColorScheme } from "../utils/colorScheme";

interface UserMenuProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ name, email, avatarUrl }) => {
  const { bgLight, text } = useColorScheme();

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" name={name} src={avatarUrl} />
      </MenuButton>
      <MenuList bg={bgLight}>
        <MenuItem>
          <VStack align="start" spacing={1}>
            <HStack>
              <Text fontWeight="bold" color={text}>
                Logged in as:
              </Text>
              <Text color={text}>{name}</Text>
            </HStack>
            <Text fontSize="sm" color={text}>
              {email}
            </Text>
          </VStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
