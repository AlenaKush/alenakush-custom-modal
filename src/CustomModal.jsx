import React, { useEffect } from "react";

function CustomModal({
  show,
  title,
  message,
  children,
  onClose,
  onConfirm,
  confirmLabel,
  cancelLabel,
  showClose = true,
  style = {},
  className = "",
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (show) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style.overlay,
      }}
    >
      <div
        className={`modal-box ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "460px",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          position: "relative",
          ...style.modal,
        }}
      >
        {showClose && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              lineHeight: 1,
              ...style.closeButton,
            }}
            aria-label="Close"
          >
            &times;
          </button>
        )}

        {title && <h2 style={{ marginBottom: "1rem", ...style.title }}>{title}</h2>}

        {children ? (
          <div style={{ ...style.content }}>{children}</div>
        ) : (
          message && <p style={{ marginBottom: "1.5rem", ...style.message }}>{message}</p>
        )}

        {(confirmLabel || cancelLabel) && (
          <div
            className="modal-buttons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginTop: "1rem",
              ...style.buttons,
            }}
          >
            {cancelLabel && (
              <button
                onClick={onClose}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "6px",
                  flex: 1,
                  cursor: "pointer",
                  ...style.cancelButton,
                }}
              >
                {cancelLabel}
              </button>
            )}
            {confirmLabel && (
              <button
                onClick={onConfirm}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "6px",
                  flex: 1,
                  cursor: "pointer",
                  ...style.confirmButton,
                }}
              >
                {confirmLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomModal;
