import { useLayoutEffect } from 'react';

function useLockBodyScroll() {
    useLayoutEffect(() => {
        if (process.browser) {
            const originalBodyOverflow = window.getComputedStyle(document.body).overflow;
            const originalDocumentOverflow = window.getComputedStyle(document.documentElement).overflow;
            // const originalBodyOverflow = window.document.documentElement.style.overflow
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalBodyOverflow;
                document.documentElement.style.overflow = originalDocumentOverflow;
            };
        }
    }, [process.browser]);
}

export default useLockBodyScroll;
