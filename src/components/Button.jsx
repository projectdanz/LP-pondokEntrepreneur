export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
}) {
  const baseStyle = `
        inline-flex items-center justify-center
        rounded-2xl font-semibold
        transition-all duration-300
        focus:outline-none
        focus:ring-2 focus:ring-[#ffc80f]/50
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        tracking-wide
    `;

  const variants = {
    primary: `
            bg-[#0b3883] text-white
            hover:bg-[#0e489b]
            hover:shadow-[0_0_20px_rgba(11,56,131,0.4)]
        `,
    secondary: `
            bg-[#ffca11] text-[#0b3883]
            hover:bg-[#ffca11]/90
            hover:shadow-[0_0_20px_rgba(255,202,17,0.3)]
        `,
    outline: `
            bg-transparent text-[#0b3883]
            border-2 border-[#0b3883]
            hover:bg-[#0b3883] hover:text-white
        `,
    ghost: `
            bg-transparent text-[#0b3883]
            hover:bg-[#0b3883]/5
        `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
                ${baseStyle}
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          Memuat...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
