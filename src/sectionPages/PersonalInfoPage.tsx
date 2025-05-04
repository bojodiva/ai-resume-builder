"use client";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, Flex } from "@chakra-ui/react";
import { usePersonalInfo } from "@/contexts/PersonalInfoContext";
import { useRouter } from "next/navigation";

export default function PersonalInfoPage() {
    const router = useRouter();
  const { personalInfo, setPersonalInfo } = usePersonalInfo();
  const {firstName, lastName, middleName, email, tel, location, portfolioUrl, linkedInUrl} = personalInfo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPersonalInfo({...personalInfo, [name]: value})
  }

  const handleAdd = () => {
    router.push("/form/educationPage")
  }

  return (
    <Box maxW="700px" mx="auto" mt="100px" mb="100px" p={8} border="1px solid #ccc" borderRadius="md">
             <Box width="dvh">
                 <Heading  mb={8} fontSize={["22px", "28px", "32px", "36px"]}>Add Personal Information</Heading>
     
                 <VStack gap={3}>
                    <Flex gap={5}>
                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>First Name</FormLabel>
                         <Input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="first name"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>
     
                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Middle Name</FormLabel>
                         <Input type="text" name="middleName" value={middleName} onChange={handleChange} placeholder="middle name"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]} variant="subtle" required/>
                     </FormControl>
     
                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Last Name</FormLabel>
                         <Input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="last name"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>
                     </Flex>
     
                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Email</FormLabel>
                         <Input type="email" name="email" value={email} onChange={handleChange} placeholder="email"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>
     
                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Tel</FormLabel> 
                         <Input type="number" name="tel" value={tel} onChange={handleChange} placeholder="phone number" _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>

                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Location</FormLabel>
                         <Input type="text" name="location" value={location} onChange={handleChange} placeholder="e.g Lagos, Nigeria"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>

                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>LinkedIn Profile Url</FormLabel>
                         <Input type="url" name="linkedInUrl" value={linkedInUrl} onChange={handleChange} placeholder="input a shortened profile url"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle" required/>
                     </FormControl>

                     <FormControl>
                         <FormLabel fontSize={["14px", "16px", "18px", "18px"]}>Portfolio Url</FormLabel>
                         <Input type="url" name="portfolioUrl" value={portfolioUrl} onChange={handleChange} placeholder="input a shortened portfolio url"  _placeholder={{ color: "gray.400" }} fontSize={["12px", "12px", "15px", "16px"]}  variant="subtle"/>
                     </FormControl>
     
                 <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue" onClick={handleAdd} isDisabled={!firstName || !lastName || !middleName || !email || !tel || !location || !linkedInUrl}>
                   Add Personal Information
                 </Button>
                 </VStack>
     
             </Box>
             {/* </Flex> */}
    </Box>
  );
}
