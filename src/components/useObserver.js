import React from "react";
import { useRef } from "react";
import { useState } from "react";

export function useObserver(ref){
    const [isIntersecting, setIsIntersecting] = React.useState
    (false);

    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));

    React.useEffect(() => {
        observer.observe(ref.current);
        return ()=> observer.disconnect();
    }, []);

    return isIntersecting;
};