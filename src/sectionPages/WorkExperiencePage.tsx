"use client";
import { useState } from "react";
import { useWorkExperience } from "@/contexts/WorkContext";
import { Box, Button, FormControl, FormLabel, Input, Text, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";

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

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.companyName && form.role && form.startDate && form.endDate && form.achievements) {
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
        <Box>
            <Heading>Add Work Experience</Heading>

            <VStack>
                <FormControl>
                    <FormLabel> Job Role</FormLabel>
                    <Input  name="role" placeholder="Your job role" value={form.role} onChange={handleChange}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Name of Company</FormLabel>
                    <Input name="companyName" placeholder="Name of company" value={form.companyName} onChange={handleChange}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Start Date</FormLabel>
                    <Input name="startDate" placeholder="e.g september, 2023" value={form.startDate} onChange={handleChange}/>
                </FormControl>

                <FormControl>
                    <FormLabel>End Date</FormLabel>
                    <Input name="endDate" placeholder="e.g August, 2024" value={form.endDate} onChange={handleChange}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Achievements</FormLabel>
                    <Input name="achievements" placeholder="designed the company's website" value={form.achievements} onChange={handleChange}/>
                </FormControl>
            </VStack>

            <Button mt={4} colorScheme="blue" onClick={handleAdd} isDisabled={!form.role || !form.companyName || !form.startDate || !form.endDate || !form.achievements}>
              Add Work Experience
            </Button>
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