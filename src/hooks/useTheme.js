import { useState, useEffect } from "react";
import themes from "../constants/themes";

// Detecta el tema del sistema operativo y escucha cambios en tiempo real
function useTheme() {
    const getSystemTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    const [theme, setTheme] = useState(getSystemTheme);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setTheme(e.matches ? "dark" : "light");
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Devuelve tanto el nombre del tema como los colores ya resueltos
    return { theme, t: themes[theme] };
}

export default useTheme;
