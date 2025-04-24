"use client";
import { useState } from "react";
import { useWorkExperience } from "@/contexts/WorkContext";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function WorkExperiencePage(){
    const router = useRouter();
    const { addWorkExperience } = useWorkExperience();
    const [form, setForm] = useState({
        role: "",
        companyName: "",
        startDate: "",
        endDate: "",
        achievements: "",
    });

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value });
  };

  const {role, companyName, startDate, endDate, achievements} = form

  const handleAdd = () => {
    if (companyName && role && startDate && endDate && achievements) {
      addWorkExperience(form);
      setForm({ role: "",
        companyName: "",
        startDate: "",
        endDate: "",
        achievements: "",
    });
    router.push("/form/volunteeringPage")
    }
  };

    return(
       <>
       <Box maxW="700px" mx="auto" mt="100px" mb="100px" p={6} border="1px solid #ccc" borderRadius="md">
        {/* <Flex width="dvh" justify="center" align="center" height="100vh"> */}
        <Box width="dvh">
            <Heading mb={8} fontSize={["22px", "28px", "32px", "36px"]}>Add Work Experience</Heading>

            <VStack gap={3}>
                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Job Role</FormLabel>
                    <Input  name="role" placeholder="your job role" value={role} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Name of Company</FormLabel>
                    <Input name="companyName" placeholder="name of company" value={companyName} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]} variant="subtle"/>
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Start Date</FormLabel>
                    <Input name="startDate" placeholder="september, 2023" value={startDate} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>End Date</FormLabel>
                    <Input name="endDate" placeholder="august, 2024" value={endDate} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Achievements</FormLabel>
                    <Textarea name="achievements" placeholder="e.g designed the company's website" value={achievements} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

            <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue" onClick={handleAdd} isDisabled={!role || !companyName || !startDate || !endDate || !achievements}>
              Add Work Experience
            </Button>
            </VStack>

        </Box>
        </Box>
       </>
    );
}


{/*  <Box maxW="500px" mx="auto" mt={10}>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input name="name" value={formData.name} onChange={handleChange} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input name="email" value={formData.email} onChange={handleChange} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Experience</FormLabel>
        <Textarea name="experience" value={formData.experience} onChange={handleChange} />
      </FormControl>

      <Button colorScheme="yellow" bg="accent" onClick={handleSubmit}>
        Generate Resume
      </Button>
    </Box>
    

      <Box>
        <Heading size="sm" mb={3}>Added Experiences</Heading>
        <SimpleGrid spacing={4}>
          {workExperience.map((item, index) => (
            <Box key={index} border="1px solid #ccc" borderRadius="md" p={4}>
              <Text fontWeight="bold">{item.role}</Text>
              <Text>{item.companyName}</Text>
              <Text>{item.startDate}</Text>
              <Text>{item.endDate}</Text>
              <Text>{item.achievements}</Text>
              <Button mt={2} size="sm" colorScheme="red" onClick={() => removeWorkExperience(index)}>
                Remove
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    */}