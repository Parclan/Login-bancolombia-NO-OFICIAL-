import { useEffect } from "react";

// Modal genérico con overlay, título, contenido y botón de cierre.
// Se activa/desactiva con la prop `abierto`. Cierra con ESC o clic en el fondo.
function Modal({ abierto, onCerrar, titulo, t, children }) {
    // Cerrar con tecla ESC
    useEffect(() => {
        if (!abierto) return;
        const handler = (e) => { if (e.key === "Escape") onCerrar(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [abierto, onCerrar]);

    if (!abierto) return null;

    return (
        // Fondo oscuro — clic fuera cierra el modal
        <div
            onClick={onCerrar}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                backdropFilter: "blur(3px)",
                animation: "fadeIn 0.15s ease",
            }}
        >
            {/* Tarjeta del modal — detiene la propagación del clic */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: t.card,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: t.cardShadow,
                    borderRadius: "20px",
                    padding: "36px 32px",
                    maxWidth: "420px",
                    width: "100%",
                    position: "relative",
                    animation: "slideUp 0.2s ease",
                }}
            >
                {/* Botón cerrar (X) */}
                <button
                    onClick={onCerrar}
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: t.subtext,
                        fontSize: "20px",
                        lineHeight: 1,
                        opacity: 0.6,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                >
                    ✕
                </button>

                {/* Título */}
                <h2
                    style={{
                        color: t.title,
                        fontSize: "18px",
                        fontWeight: "700",
                        marginBottom: "8px",
                    }}
                >
                    {titulo}
                </h2>

                {/* Contenido personalizable */}
                <div style={{ color: t.subtext, fontSize: "14px", lineHeight: "1.6" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
