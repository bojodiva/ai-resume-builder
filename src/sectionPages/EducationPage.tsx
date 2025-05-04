"use client";
import { useState } from "react";
import { useEducation } from "@/contexts/EducationContext";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function EducationDataPage(){
    const router = useRouter();
    const { addEducation } = useEducation();
    const [form, setForm] = useState({
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        course: ""
    });

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value });
  };

  const {schoolName, degree, startDate, endDate, course} = form

  const handleAdd = () => {
    if (schoolName && degree && startDate && endDate && course) {
      addEducation(form);
      setForm({ 
        degree: "",
        schoolName: "",
        startDate: "",
        endDate: "",
        course: "",
    });
    router.push("/form/volunteeringPage")
    }
  };

    return(
       <>
       <Box maxW="700px" mx="auto" mt="100px" mb="100px" p={8} border="1px solid #ccc" borderRadius="md">
        {/* <Flex width="dvh" justify="center" align="center" height="100vh"> */}
        <Box width="dvh">
            <Heading mb={8} fontSize={["22px", "28px", "32px", "36px"]}>Add Education</Heading>

            <VStack gap={3}>
                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Name of school</FormLabel>
                    <Input  name="schoolName" placeholder="name of school, instituition, college or university" value={schoolName} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Degree</FormLabel>
                    <Input name="degree" placeholder="degree pursued / pursuing" value={degree} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]} variant="subtle"/>
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
                    <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Course of study</FormLabel>
                    <Input name="course" placeholder="course of study" value={course} onChange={handleChange} _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                </FormControl>

            <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue" onClick={handleAdd} isDisabled={!degree || !schoolName || !startDate || !endDate || !course}>
              Add Education
            </Button>
            </VStack>

        </Box>
        </Box>
       </>
    );
}