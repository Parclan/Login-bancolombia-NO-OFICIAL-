import { useState, useEffect } from "react";
import './App.css';
import logo_blanco from "./assets/img/Bancolombia-Logo-blanco.png";
import logo from "./assets/img/Bancolombia-Logo.png";
import auth_trazo from "./assets/img/auth-trazo.svg";

// ── Paletas de color por tema ──────────────────────────────────────────────
const themes = {
  dark: {
    bg: "#2b2b2b",
    overlayBg: "rgba(30, 30, 30, 0.72)",
    card: "rgba(58, 58, 58, 0.72)",
    cardShadow: "0 8px 40px rgba(0,0,0,0.4)",
    title: "#ffffff",
    greeting: "#ffffff",
    subtext: "#ffffff",       // gray-300
    inputText: "#ffffff",
    inputPlaceholder: "#9ca3af", // gray-400
    inputBorder: "rgba(255,255,255,0.35)",
    iconStroke: "rgba(255,255,255,0.6)",
    btnBg: "#555555",
    btnBgHover: "#666666",
    btnText: "#ffffff",
    linkColor: "#FFD000",
    footerText: "rgba(255,255,255,0.55)",
    footerDot: "rgba(255,255,255,0.3)",
    brandText: "#ffffff",
    brandSub: "rgba(255,255,255,0.4)",
    ipText: "rgba(255,255,255,0.45)",
    logoSrc: "blanco",        // se usa logo_blanco
    svgFill: "white",
  },
  light: {
    bg: "#f0f2f5",
    overlayBg: "rgba(240, 242, 245, 0.70)",
    card: "rgba(255, 255, 255, 0.72)",
    cardShadow: "0 8px 40px rgba(0,0,0,0.12)",
    title: "#1a1a1a",
    greeting: "#1a1a1a",
    subtext: "#4b5563",       // gray-600
    inputText: "#1a1a1a",
    inputPlaceholder: "#9ca3af",
    inputBorder: "rgba(0,0,0,0.2)",
    iconStroke: "rgba(0,0,0,0.45)",
    btnBg: "#FFD000",
    btnBgHover: "#FFC200",
    btnText: "#1a1a1a",
    linkColor: "#b38600",
    footerText: "rgba(0,0,0,0.45)",
    footerDot: "rgba(0,0,0,0.2)",
    brandText: "#1a1a1a",
    brandSub: "rgba(0,0,0,0.35)",
    ipText: "rgba(0,0,0,0.4)",
    logoSrc: "color",         // se usa logo (con color)
    svgFill: "#1a1a1a",
  },
};

export default function BancolombiaLogin() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [now, setNow] = useState(new Date());

  // Detecta el tema del sistema operativo
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

  const t = themes[theme];

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ backgroundColor: t.bg, fontFamily: "'Segoe UI', sans-serif", transition: "background-color 0.3s" }}
    >

      <br></br>
      <br></br>

      {/* ── BACKGROUND IMAGE + OVERLAY ── */}

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Imagen de fondo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${auth_trazo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        {/* Overlay adaptado al tema */}
        <div
          style={{
            position: "absolute",
            inset: 0
          }}
        />
      </div>


      {/* ── HEADER: Logo ── */}
      <header className="relative z-10 flex justify-center pt-8 pb-2">
        <div className="flex items-center gap-3">
          <img
            src={t.logoSrc === "blanco" ? logo_blanco : logo}
            alt="Logo Bancolombia"
            width="230"
            style={{ transition: "opacity 0.3s" }}
          />
        </div>
      </header>

      {/* ── TÍTULO ── */}
      <div className="relative z-10 text-center mt-4 mb-6">
        <h1
          style={{ fontSize: "32px", fontWeight: "600", letterSpacing: "0.5px", color: t.title, transition: "color 0.3s" }}
        >
          Sucursal Virtual Personas
        </h1>
      </div>

      {/* ── CARD CENTRAL ── */}
      <main className="relative z-10 flex justify-center px-12">
        <div
          className="w-full rounded-2xl px-12 py-12"
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
          <div className="text-center mb-8">
            <p className="font-bold text-xl mb-4" style={{ color: t.greeting }}>¡Hola!</p>
            <p className="text-lg font-semibold" style={{ color: t.subtext }}>
              Ingresa los datos para gestionar tus productos y hacer transacciones.
            </p>
          </div>

          {/* Campo Usuario */}
          <div className="mb-1">
            <div
              className="flex items-center gap-3 pb-2"
              style={{ borderBottom: `1px solid ${t.inputBorder}` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.iconStroke} strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuario"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: t.inputText,
                }}
                className="placeholder-gray-400"
              />
            </div>
          </div>

          {/* Link olvidaste usuario */}
          <div className="mb-6">
            <a href="#" className="text-xs" style={{ color: t.linkColor, textDecoration: "underline" }}>
              ¿Olvidaste tu usuario?
            </a>
          </div>

          {/* Campo Clave */}
          <div className="mb-1">
            <div
              className="flex items-center gap-3 pb-2"
              style={{ borderBottom: `1px solid ${t.inputBorder}` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.iconStroke} strokeWidth="1.8">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              <input
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                placeholder="Clave del cajero"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: t.inputText,
                }}
                className="placeholder-gray-400"
              />
            </div>
          </div>

          {/* Link olvidaste clave */}
          <div className="mb-8">
            <a href="#" className="text-xs" style={{ color: t.linkColor, textDecoration: "underline" }}>
              ¿Olvidaste o bloqueaste tu clave?
            </a>
          </div>

          {/* Botón Iniciar sesión */}
          <button
            className="w-full py-3 rounded-full text-sm font-medium transition-all"
            style={{ backgroundColor: t.btnBg, color: t.btnText, letterSpacing: "0.3px", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.btnBgHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.btnBg)}
          >
            Iniciar sesión
          </button>

          {/* Crear usuario */}
          <div className="text-center mt-5">
            <a href="#" className="text-sm" style={{ color: t.greeting, textDecoration: "underline" }}>
              Crear usuario
            </a>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 mt-auto pt-10 pb-4 px-8">
        <div
          className="flex justify-end gap-4 text-xs pb-3 mb-3"
          style={{ color: t.footerText }}
        >
          {["¿Problemas para conectarte?", "Aprende sobre seguridad", "Reglamento Sucursal Virtual", "Política de privacidad"].map(
            (link, i) => (
              <span key={link} className="flex items-center gap-4">
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: t.footerText }}>{link}</a>
                {i < 3 && <span style={{ color: t.footerDot }}>·</span>}
              </span>
            )
          )}
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2" style={{ fontSize: "15px", fontWeight: "500", color: t.brandText }}>
              <img
                src={t.logoSrc === "blanco" ? logo_blanco : logo}
                alt="Logo Bancolombia"
                width="200"
                style={{ transition: "opacity 0.3s" }}
              />
            </div>
          </div>

          <div className="text-right" style={{ fontSize: "11px", color: t.ipText }}>
            <div>{fechaHora}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}