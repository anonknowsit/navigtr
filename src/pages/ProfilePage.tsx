import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { useColorScheme } from "../utils/colorScheme";

// Expanded list of avatar styles
const avatarStyles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "avataaars-neutral",
  "big-ears",
  "big-ears-neutral",
  "big-smile",
  "bottts",
  "bottts-neutral",
  "croodles",
  "croodles-neutral",
  "fun-emoji",
  "icons",
  "identicon",
  "initials",
  "lorelei",
  "lorelei-neutral",
  "micah",
  "miniavs",
  "open-peeps",
  "personas",
  "pixel-art",
  "pixel-art-neutral",
  "shapes",
  "thumbs",
  "human",
  "gridy",
  "jdenticon",
];

const ProfilePage: React.FC = () => {
  const { bgLight, text } = useColorScheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    jobTitle: "Software Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    avatarStyle: "adventurer",
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [tempAvatarStyle, setTempAvatarStyle] = useState(profile.avatarStyle);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (style: string) => {
    setTempAvatarStyle(style);
    onClose();
  };

  const getAvatarUrl = (style: string, seed: string) => {
    return `https://api.dicebear.com/6.x/${style}/svg?seed=${encodeURIComponent(
      seed
    )}`;
  };

  return (
    <Layout tempAvatarStyle={tempAvatarStyle}>
      <VStack spacing={8} align="stretch">
        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <HStack spacing={6}>
            <Avatar
              size="2xl"
              name={profile.name}
              src={getAvatarUrl(tempAvatarStyle, profile.name)}
            />
            <VStack align="start" spacing={2}>
              <Heading size="lg">{profile.name}</Heading>
              {isEditing ? (
                <FormControl>
                  <FormLabel>Job Title</FormLabel>
                  <Input
                    name="jobTitle"
                    value={editedProfile.jobTitle}
                    onChange={handleChange}
                  />
                </FormControl>
              ) : (
                <Text color="gray.500">{profile.jobTitle}</Text>
              )}
              <HStack>
                {isEditing ? (
                  <>
                    <Button size="sm" colorScheme="green" onClick={handleSave}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button size="sm" colorScheme="blue" onClick={handleEdit}>
                    Edit Profile
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={onOpen}>
                  Change Avatar
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={4}>
              Personal Information
            </Heading>
            <VStack align="start" spacing={3}>
              {isEditing ? (
                <>
                  <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      name="name"
                      value={editedProfile.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      value={editedProfile.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      name="phone"
                      value={editedProfile.phone}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input
                      name="location"
                      value={editedProfile.location}
                      onChange={handleChange}
                    />
                  </FormControl>
                </>
              ) : (
                <>
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="bold">Full Name:</Text>
                    <Text>{profile.name}</Text>
                  </HStack>
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="bold">Email:</Text>
                    <Text>{profile.email}</Text>
                  </HStack>
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="bold">Phone:</Text>
                    <Text>{profile.phone}</Text>
                  </HStack>
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="bold">Location:</Text>
                    <Text>{profile.location}</Text>
                  </HStack>
                </>
              )}
            </VStack>
          </Box>

          <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={4}>
              Account Statistics
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
              <Stat>
                <StatLabel>Total Posts</StatLabel>
                <StatNumber>45</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Followers</StatLabel>
                <StatNumber>1,234</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Following</StatLabel>
                <StatNumber>567</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Joined</StatLabel>
                <StatNumber>2 years ago</StatNumber>
              </Stat>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Box bg={bgLight} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>
            Account Settings
          </Heading>
          <VStack align="start" spacing={4}>
            <HStack justify="space-between" w="full">
              <Text>Two-Factor Authentication</Text>
              <Button size="sm" colorScheme="green">
                Enable
              </Button>
            </HStack>
            <Divider />
            <HStack justify="space-between" w="full">
              <Text>Email Notifications</Text>
              <Button size="sm" colorScheme="red">
                Disable
              </Button>
            </HStack>
            <Divider />
            <HStack justify="space-between" w="full">
              <Text>Change Password</Text>
              <Button size="sm">Update</Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose an Avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Wrap spacing={4}>
              {avatarStyles.map((style) => (
                <WrapItem key={style}>
                  <Avatar
                    size="lg"
                    name={profile.name}
                    src={getAvatarUrl(style, profile.name)}
                    cursor="pointer"
                    onClick={() => handleAvatarChange(style)}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default ProfilePage;
