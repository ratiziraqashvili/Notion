"use client"

import { useUser } from "@clerk/clerk-react"
import { useRouter } from "next/router";

export const SearchCommand = () => {
    const { user } = useUser();
    const router = useRouter();
    
} 