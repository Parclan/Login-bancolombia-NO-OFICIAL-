import { useState, useEffect } from "react";

// Mantiene un reloj actualizado cada segundo formateado en español colombiano
function useClock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const fechaHora = now.toLocaleString("es-CO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    return fechaHora;
}

export default useClock;
