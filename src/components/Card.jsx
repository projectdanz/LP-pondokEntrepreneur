import { useState } from "react";
import "./styles/CardStyle.css";

export default function Card({
  variant = "simple",
  size = "md",
  title,
  alignButton = "right", // side-right, side-left, bottom-center, right, left
  boxOffset = "right", // right, left (for simple variant)
  children,
}) {
  const [open, setOpen] = useState(false);

  const sizeClass = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-3xl",
  };

  const isExpandable = variant === "expandable";
  const isSimple = variant === "simple";
  const isSideLayout =
    alignButton === "side-right" || alignButton === "side-left";
  const isBottomCenter = alignButton === "bottom-center";

  const renderButton = () => (
    <button
      onClick={() => setOpen(!open)}
      className={`card-toggle-btn ${open ? "is-open" : ""} ${isBottomCenter ? "btn-bottom-center" : ""}`}
      aria-expanded={open}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );

  return (
    <div className={`card-wrapper mx-auto ${sizeClass[size]}`}>
      <div
        className={`
                    card-base
                    ${isSimple ? "card-simple" : "card-modern-shadow"}
                    ${variant === "path-item" ? "card-path-item" : ""}
                    ${isSimple && boxOffset === "left" ? "offset-left" : ""}
                    ${isSideLayout ? "card-side-layout" : ""}
                    ${isBottomCenter ? "card-bottom-center-layout" : ""}
                    ${variant === "content" ? "border-2 border-[#0e489b]/10" : ""}
                `}
      >
        {/* Side Left Button */}
        {isExpandable && alignButton === "side-left" && renderButton()}

        <div className="card-content-wrapper">
          {/* Always show Title if present */}
          {title && (
            <h3
              className={`card-title ${isSimple ? "text-center" : "text-left"}`}
            >
              {title}
            </h3>
          )}

          {/* Content Area */}
          {!isExpandable ? (
            <div
              className={`card-body ${isSimple ? "text-center font-bold text-lg" : ""}`}
            >
              {children}
            </div>
          ) : (
            <>
              <div
                className={`expand-transition ${open ? "expanded" : "collapsed"}`}
              >
                <div className="card-body">{children}</div>
              </div>

              {/* Standard Bottom Actions (Left/Right) */}
              {!isSideLayout && !isBottomCenter && (
                <div
                  className={`flex mt-4 ${alignButton === "left" ? "justify-start" : "justify-end"}`}
                >
                  {renderButton()}
                </div>
              )}
            </>
          )}
        </div>

        {/* Side Right Button */}
        {isExpandable && alignButton === "side-right" && renderButton()}

        {/* Bottom Center Button */}
        {isExpandable && isBottomCenter && renderButton()}
      </div>
    </div>
  );
}
