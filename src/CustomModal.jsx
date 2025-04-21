import React, { useEffect } from "react";

/**
 * CustomModal - A reusable, fully customizable modal component.
 */
function CustomModal({
  show,               // Controls visibility of the modal
  title,              // Optional modal title
  message,            // Optional message (ignored if children is provided)
  children,           // Custom content that replaces message
  onClose,            // Function called when modal is dismissed
  onConfirm,          // Function called on confirm button click
  confirmLabel,       // Label for confirm button
  cancelLabel,        // Label for cancel button
  showClose = true,   // Whether to show × close button
  style = {},         // Optional styles for modal parts
  className = "",     // Additional class for modal box
}) {

  // Escape key closes modal
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

  // Don't render anything if not visible
  if (!show) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose} // Clicking the background closes the modal
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style.overlay, // Custom overlay styles
      }}
    >
      <div
        className={`modal-box ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "460px",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          position: "relative",
          ...style.modal, // Custom modal box styles
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
              ...style.closeButton, // Custom close button styles
            }}
            aria-label="Close"
          >
            &times;
          </button>
        )}

        {/* Title */}
        {title && <h2 style={{ marginBottom: "1rem", ...style.title }}>{title}</h2>}

        {/* Either custom content or default message */}
        {children ? (
          <div style={{ ...style.content }}>{children}</div>
        ) : (
          message && <p style={{ marginBottom: "1.5rem", ...style.message }}>{message}</p>
        )}

        {/* Optional buttons */}
        {(confirmLabel || cancelLabel) && (
          <div
            className="modal-buttons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginTop: "1rem",
              ...style.buttons, // Custom styles for button container
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
                  ...style.cancelButton, // Custom cancel button
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
                  ...style.confirmButton, // Custom confirm button
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
