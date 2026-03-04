import { useState } from "react";
import { sileo } from "sileo";
import { UserIcon, LockIcon, PhoneIcon, BuildingOfficeIcon, DeviceMobileIcon, KeyIcon } from "@phosphor-icons/react";
import InputField from "./InputField";
import Modal from "./Modal";

// Credenciales válidas (hardcoded para demo)
const USUARIO_VALIDO = "admin";
const CLAVE_VALIDA = "1234";

// Simula una petición de autenticación con delay de 1.5s
function autenticar(usuario, clave) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === USUARIO_VALIDO && clave === CLAVE_VALIDA) {
                resolve({ nombre: "Administrador" });
            } else {
                reject(new Error("Usuario o clave incorrectos."));
            }
        }, 1500);
    });
}

// Tarjeta central con el formulario de inicio de sesión.
function LoginCard({ t, theme }) {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [cargando, setCargando] = useState(false);

    // Control de modales
    const [modalUsuario, setModalUsuario] = useState(false);
    const [modalClave, setModalClave] = useState(false);

    const activo = usuario.trim() !== "" && clave.trim() !== "";

    // Color de íconos en modales: amarillo oscuro en luz, amarillo brillante en oscuro
    const iconColor = theme === "dark" ? "#fdda24" : "#b38600";

    const handleLogin = () => {
        setCargando(true);
        sileo.promise(autenticar(usuario, clave), {
            loading: {
                title: "Verificando...",
                description: "Validando tus credenciales.",
            },
            success: (data) => ({
                title: `¡Bienvenido, ${data.nombre}!`,
                description: "Ingreso exitoso a la Sucursal Virtual.",
            }),
            error: (err) => ({
                title: "Error de autenticación",
                description: err.message,
            }),
        })
            .catch(() => { })
            .finally(() => setCargando(false));
    };

    return (
        // Responsive: padding reducido en mobile, centrado en todas las pantallas
        <main className="relative z-10 flex justify-center px-4 sm:px-8 md:px-12">
            <div
                className="w-full rounded-2xl px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12"
                style={{
                    maxWidth: "650px",
                    backgroundColor: t.card,
                    boxShadow: t.cardShadow,
                    transition: "background-color 0.3s, box-shadow 0.3s",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                }}
            >
                {/* Saludo */}
                <div className="text-center mb-6 md:mb-8">
                    <p className="font-bold text-lg md:text-xl mb-3" style={{ color: t.greeting }}>¡Hola!</p>
                    <p className="text-base md:text-lg font-semibold" style={{ color: t.subtext }}>
                        Ingresa los datos para gestionar tus productos y hacer transacciones.
                    </p>
                </div>

                {/* Campo Usuario */}
                <div className="mb-1">
                    <InputField
                        t={t}
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Usuario"
                        type="text"
                    >
                        <UserIcon size={18} color={t.iconStroke} weight="light" />
                    </InputField>
                </div>

                {/* Link olvidaste usuario */}
                <div className="mb-5">
                    <button
                        className="text-xs"
                        style={{ color: t.linkColor, textDecoration: "underline", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        onClick={(e) => { e.preventDefault(); setModalUsuario(true); }}
                    >
                        ¿Olvidaste tu usuario?
                    </button>
                </div>

                {/* Campo Clave */}
                <div className="mb-1">
                    <InputField
                        t={t}
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        placeholder="Clave del cajero"
                        type="password"
                    >
                        <LockIcon size={18} color={t.iconStroke} weight="light" />
                    </InputField>
                </div>

                {/* Link olvidaste clave */}
                <div className="mb-7 md:mb-8">
                    <button
                        className="text-xs"
                        style={{ color: t.linkColor, textDecoration: "underline", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        onClick={(e) => { e.preventDefault(); setModalClave(true); }}
                    >
                        ¿Olvidaste o bloqueaste tu clave?
                    </button>
                </div>

                {/* Botón Iniciar sesión */}
                <button
                    className="w-full py-3 rounded-full text-sm font-medium transition-all"
                    disabled={!activo || cargando}
                    onClick={handleLogin}
                    style={{
                        backgroundColor: activo && !cargando ? "#fdda24" : "rgba(128,128,128,0.25)",
                        color: activo && !cargando ? "#1a1a1a" : "rgba(128,128,128,0.5)",
                        letterSpacing: "0.3px",
                        transition: "background-color 0.2s, color 0.2s",
                        cursor: activo && !cargando ? "pointer" : "not-allowed",
                    }}
                    onMouseEnter={(e) => { if (activo && !cargando) e.currentTarget.style.backgroundColor = "#f0c800"; }}
                    onMouseLeave={(e) => { if (activo && !cargando) e.currentTarget.style.backgroundColor = "#fdda24"; }}
                >
                    {cargando ? "Verificando..." : "Iniciar sesión"}
                </button>

                {/* Crear usuario */}
                <div className="text-center mt-5">
                    <button
                        className="text-sm"
                        style={{ color: t.greeting, textDecoration: "underline", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        onClick={(e) => e.preventDefault()}
                    >
                        Crear usuario
                    </button>
                </div>
            </div>

            {/* ── MODAL: Olvidaste tu usuario ── */}
            <Modal
                abierto={modalUsuario}
                onCerrar={() => setModalUsuario(false)}
                titulo="¿Olvidaste tu usuario?"
                t={t}
            >
                <p style={{ marginBottom: "16px" }}>
                    Para recuperar tu usuario, comunícate con nosotros a través de los siguientes canales:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: iconColor, flexShrink: 0 }}><PhoneIcon size={26} weight="duotone" /></span>
                        <span><strong style={{ color: t.title }}>Línea de atención:</strong> 018000 931 987</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: iconColor, flexShrink: 0 }}><BuildingOfficeIcon size={26} weight="duotone" /></span>
                        <span><strong style={{ color: t.title }}>Sucursal física:</strong> Presentando tu documento de identidad.</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: iconColor, flexShrink: 0 }}><DeviceMobileIcon size={26} weight="duotone" /></span>
                        <span><strong style={{ color: t.title }}>App Bancolombia:</strong> Usa la opción "¿Olvidé mi usuario".</span>
                    </li>
                </ul>
                <button
                    onClick={() => setModalUsuario(false)}
                    style={{
                        marginTop: "24px", width: "100%", padding: "10px",
                        borderRadius: "999px", border: "none",
                        backgroundColor: "#fdda24", color: "#1a1a1a",
                        fontWeight: "600", fontSize: "14px", cursor: "pointer",
                    }}
                >
                    Entendido
                </button>
            </Modal>

            {/* ── MODAL: Olvidaste tu clave ── */}
            <Modal
                abierto={modalClave}
                onCerrar={() => setModalClave(false)}
                titulo="¿Olvidaste o bloqueaste tu clave?"
                t={t}
            >
                <p style={{ marginBottom: "16px" }}>
                    Puedes restablecer tu clave del cajero de las siguientes maneras:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: iconColor, flexShrink: 0 }}><KeyIcon size={26} weight="duotone" /></span>
                        <span><strong style={{ color: t.title }}>Cajero automático:</strong> Genera una nueva clave presentando tu tarjeta.</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: iconColor, flexShrink: 0 }}><PhoneIcon size={26} weight="duotone" /></span>
                        <span><strong style={{ color: t.title }}>Línea de atención:</strong> 018000 931 987 (24 horas).</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: iconColor, flexShrink: 0 }}><DeviceMobileIcon size={26} weight="duotone" /></span>
                        <span><strong style={{ color: t.title }}>App Bancolombia:</strong> Sección "Seguridad → Cambiar clave".</span>
                    </li>
                </ul>
                <button
                    onClick={() => setModalClave(false)}
                    style={{
                        marginTop: "24px", width: "100%", padding: "10px",
                        borderRadius: "999px", border: "none",
                        backgroundColor: "#fdda24", color: "#1a1a1a",
                        fontWeight: "600", fontSize: "14px", cursor: "pointer",
                    }}
                >
                    Entendido
                </button>
            </Modal>
        </main>
    );
}

export default LoginCard;
