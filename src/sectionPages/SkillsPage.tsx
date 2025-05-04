"use client";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, Flex } from "@chakra-ui/react";
import { useSkills } from "@/contexts/SkillsContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SkillsPage() {
    const router = useRouter();
  const { addSkill } = useSkills();
  const [currentSkill, setCurrentSkill] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSkill(e.target.value);
  }

  const handleAddSkill = () => {
    if (currentSkill.trim() !== "") {
      addSkill(currentSkill);
      setCurrentSkill("");
      router.push("/form/educationPage")
    }
  };

  return (
    <Box maxW="700px" mx="auto" mt="100px" mb="100px" p={8} border="1px solid #ccc" borderRadius="md">
             <Box width="dvh">
                 <Heading  mb={8} fontSize={["22px", "28px", "32px", "36px"]}>Add Skills</Heading>
     
                 <VStack gap={3}>
     
                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>List of Skills</FormLabel> 
                         <Input type="text" name="tel" value={currentSkill} onChange={handleChange} placeholder="input skills related to job description e.g writing, data analysis" _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>
     
                 <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue" onClick={handleAddSkill} isDisabled={!currentSkill}>
                   Add Skills
                 </Button>
                 </VStack>
     
             </Box>
    </Box>
  );
}
