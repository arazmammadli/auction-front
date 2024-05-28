'use client';

import {PropsWithChildren, useEffect, useState} from "react";

export function ClientOnly({children}: PropsWithChildren) {
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true)
    }, [])


    if (isMounted) return children
}