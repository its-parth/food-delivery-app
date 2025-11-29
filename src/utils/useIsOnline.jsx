import { useState } from "react";
const useIsOnline = () => {
    console.log('useIsOnline is executed');
    const [online, setOnline] = useState(true);

    window.addEventListener('online', () => {
        setOnline(true);
    });
    window.addEventListener('offline', () => {
        setOnline(false);
    });
    return online;
}

export default useIsOnline;