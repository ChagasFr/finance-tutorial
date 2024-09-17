"use client";

import { useMountedState } from "react-use"

import { useState, useEffect } from "react"

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";

export const SheetProvider = () => {
    const isMounted = useMountedState();

    if (!isMounted) return null

    return (
        <>
            <NewAccountSheet />
        </>
    )
}