import logo_blanco from "../assets/img/Bancolombia-Logo-blanco.png";
import logo from "../assets/img/Bancolombia-Logo.png";

const footerLinks = [
    "¿Problemas para conectarte?",
    "Aprende sobre seguridad",
    "Reglamento Sucursal Virtual",
    "Política de privacidad",
];

// Pie de página con links legales, logo secundario y el reloj en tiempo real.
function Footer({ t, fechaHora }) {
    return (
        <footer className="relative z-10 mt-auto pt-6 md:pt-10 pb-4 px-4 sm:px-6 md:px-8">

            {/* Links del footer — ocultos en mobile, visibles desde sm */}
            <div
                className="hidden sm:flex flex-wrap justify-end gap-x-4 gap-y-1 text-xs pb-3 mb-3"
                style={{ color: t.footerText }}
            >
                {footerLinks.map((link, i) => (
                    <span key={link} className="flex items-center gap-4">
                        <button
                            className="hover:opacity-100 transition-opacity"
                            style={{ color: t.footerText, background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: "inherit" }}
                            onClick={(e) => e.preventDefault()}
                        >
                            {link}
                        </button>
                        {i < 3 && <span style={{ color: t.footerDot }}>·</span>}
                    </span>
                ))}
            </div>

            {/* Logo y fecha/hora */}
            <div className="flex items-end justify-between">
                <div>
                    <img
                        src={t.logoSrc === "blanco" ? logo_blanco : logo}
                        alt="Logo Bancolombia"
                        style={{ width: "clamp(120px, 20vw, 200px)", transition: "opacity 0.3s" }}
                    />
                </div>

                <div className="text-right" style={{ fontSize: "clamp(9px, 2vw, 11px)", color: t.ipText }}>
                    <div>{fechaHora}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
