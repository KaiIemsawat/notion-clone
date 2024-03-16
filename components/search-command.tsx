"use client";

import { useEffect, useState } from "react";
import { File } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { api } from "@/convex/_generated/api";

import { useSearch } from "@/hooks/use-search";

export const SearchCommand = () => {
    const { user } = useUser();
    const router = useRouter();
    const document = useQuery(api.documents.getSearch);
};