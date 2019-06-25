import { useEffect, useState } from 'react';

const useLocationOnly = (location: string) => {
    // true for SSR
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        setDisplay(window.location.pathname === location);
    }, [typeof window !== 'undefined' && window.location.pathname]);
    return display;
};

export default useLocationOnly;
