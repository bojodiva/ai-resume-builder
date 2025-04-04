"use client";
import theme from "@/theme";
import { ResumeProvider } from "@/contexts/ResumeProviders";

import { ChakraProvider} from "@chakra-ui/react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ResumeProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </ResumeProvider>
      </body>
    </html>
  )
}
