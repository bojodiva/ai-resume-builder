'use client';
import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex height="100vh">
      {/* sidebar section*/}
      <Flex direction="column" width="250px" bg="gray.100" p={4} position="fixed" height="100vh" justify="space-between" >
        <Box py={10} display="flex" flexDirection="column" gap={4}>
          <Link href="/form/personalPage">
            <Button width="full" mb={2} justifyContent="flex-start">Personal Info</Button>
          </Link>
          <Link href="/form/educationPage">
            <Button width="full" mb={2} justifyContent="flex-start">Education</Button>
          </Link>
          <Link href="/form/skillsPage">
            <Button width="full" mb={2} justifyContent="flex-start">Skills</Button>
          </Link>
          <Link href="/form/workPage">
            <Button width="full" mb={2} justifyContent="flex-start">Work Experience</Button>
          </Link>
          <Link href="/form/volunteerPage">
            <Button width="full" mb={2} justifyContent="flex-start">Volunteer Experience</Button>
          </Link>
          <Link href="/form/leadershipPage">
            <Button width="full" mb={2} justifyContent="flex-start">Leadership Experience</Button>
          </Link>
        </Box>

        <Link href="/preview">
         <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue">Preview Resume</Button>
         </Link>
      </Flex>

      {/* outlet*/}
      <Box
        ml="250px"
        p={6}
        flex="1"
        overflowY="auto"
        height="100vh"
      >
        {children}
      </Box>
    </Flex>
  );
}



// {/* <div style={{ display: "flex", height: "100vh" }}>
// {/* Sidebar */}
// <aside style={{ width: "300px", padding: "20px", background: "#f0f0f0" }}>
//   <nav>
//     <ul style={{ listStyle: "none", padding: 0 }}>
//       <li><Link href="/form/personalPage">Personal Info</Link></li>
//       <li><Link href="/form/educationPage">Education</Link></li>
//       <li><Link href="/form/workPage">Work Experience</Link></li>
//       <li><Link href="/form/skillsPage">Skills</Link></li>
//       <li><Link href="/form/volunteeringPage">Volunteering Experience</Link></li>
//       <li><Link href="/form/leadershipPage">Leadership Experience</Link></li>
//     </ul>

//     <Button width={"full"} mt={4} fontSize={["14px", "16px", "18px", "18px"]} py={6} colorScheme="blue">Preview</Button>
//   </nav>
// </aside>

// {/* Dynamic content area */}
// <main style={{ flex: 1, padding: "0px" }}>
//   {children}
// </main>
// </div> */}