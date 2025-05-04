"use client";
import { useState } from "react";
import { useVolunteeringExperience } from "@/contexts/VolunteeringContext";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function VolunteeringExperiencePage(){
    const router = useRouter();
    const { addVolunteeringExperience } = useVolunteeringExperience();
    const [form, setForm] = useState({
        role: "",
        organizationName: "",
        startDate: "",
        endDate: "",
        experience: "",
    });

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value });
  };

  const {role, organizationName, startDate, endDate, experience} = form

  const handleAdd = () => {
    if (organizationName && role && startDate && endDate && experience) {
      addVolunteeringExperience(form);
      setForm({ role: "",
        organizationName: "",
        startDate: "",
        endDate: "",
        experience: "",
    });
    router.push("/form/leadershipPage")
    }
  };

    return(
       <>
       <Box maxW="700px" mx="auto" mt="100px" mb="100px" p={8} border="1px solid #ccc" borderRadius="md">
        <Box width="dvh">
            <Heading mb={8} fontSize={["22px", "28px", "32px", "36px"]}>Add Volunteering Experience</Heading>

            <VStack gap={3}>
                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Job Role</FormLabel>
                    <Input  name="role" placeholder="your job role" value={role} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Name of Organization</FormLabel>
                    <Input name="organizationName" placeholder="name of organization" value={organizationName} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]} variant="subtle"/>
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
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Experience</FormLabel>
                    <Textarea name="experience" placeholder="e.g implemented a working system that increased sales by 15%" value={experience} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

            <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue" onClick={handleAdd} isDisabled={!role || !organizationName || !startDate || !endDate || !experience}>
              Add Volunteering Experience
            </Button>
            </VStack>

        </Box>
        </Box>
       </>
    );
}