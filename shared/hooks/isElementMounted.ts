import { useEffect, useState } from "react";

export default function useIsElementMounted () {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    return mounted
}
 
