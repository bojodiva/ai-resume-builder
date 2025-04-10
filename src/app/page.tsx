"use client"
import { Box, Heading, Text, Link, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Home() {


  return (
    <Flex  justify="center" align="center" height="100vh">
    <MotionBox textAlign="center" p={8} initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 50 }} >
    <Heading color="primary" mb={4} fontSize={["22px", "28px", "32px", "36px"]}>AI-Powered Resume Builder</Heading>
    <Text color="gray.600" mb={6} fontSize={["16px", "20px", "24px", "22px"]}>
    Build AI-powered resumes effortlessly.
    </Text>
    <Link href="/form/workPage">
      <Button colorScheme="yellow" bg="accent" color="gray.600" _hover={{ bg: "yellow.400" }} px={8} py={6}>
        Get Started
      </Button>
    </Link>
  </MotionBox>
  </Flex>
  );
}

