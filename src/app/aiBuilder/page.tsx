"use client";
import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ResumeBuilder(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        tel: "",
        location: "",
        linkedIn: "",
        portfolio: "",

    })

    return(
        <></>
    )
}