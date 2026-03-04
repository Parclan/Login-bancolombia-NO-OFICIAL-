// Campo de texto reutilizable con un ícono SVG a la izquierda.
// Recibe el ícono como children para que cada uso pueda pasar su propio SVG.
function InputField({ t, value, onChange, placeholder, type = "text", children }) {
    return (
        <div
            className="flex items-center gap-3 pb-2"
            style={{ borderBottom: `1px solid ${t.inputBorder}` }}
        >
            {/* El SVG se pasa como children desde el componente padre */}
            {children}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
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
    );
}

export default InputField;
