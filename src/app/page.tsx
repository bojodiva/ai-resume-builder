import { Box, Heading, Text, Link, Button, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex  justify="center" align="center" height="100vh">
    <Box textAlign="center" p={8}>
    <Heading color="primary" mb={4} fontSize={["22px", "28px", "32px", "36px"]}>AI-Powered Resume Builder</Heading>
    <Text color="gray.600" mb={6} fontSize={["16px", "20px", "24px", "22px"]}>
    Build AI-powered resumes effortlessly.
    </Text>
    <Link href="/aiBuilder">
      <Button colorScheme="yellow" bg="accent" color="gray.600" _hover={{ bg: "yellow.400" }} px={8} py={6}>
        Get Started
      </Button>
    </Link>
  </Box>
  </Flex>
  );
}

