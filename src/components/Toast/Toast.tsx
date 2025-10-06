import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

type ToastType = "success" | "error" | "warning" | "info";

type ToastProps = {
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds
  onDismiss?: () => void;
  showCloseButton?: boolean;
  isVisible?: boolean;
};

function Toast({
  message,
  type,
  duration = 4000,
  onDismiss,
  showCloseButton = false,
  isVisible = true,
}: ToastProps) {
  const [visible, setVisible] = useState(isVisible);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      setAnimating(true);
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleDismiss();
        }, duration);

        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, duration]);

  const handleDismiss = () => {
    setAnimating(false);
    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 300);
  };

  const getIcon = () => {
    const icons = {
      success: "✅",
      error: "❌",
      warning: "⚠️",
      info: "ℹ️",
    };
    return icons[type];
  };

  const getToastClasses = () => {
    const classes = [
      styles.toast,
      styles[type],
      animating ? styles.toastVisible : styles.toastHidden,
    ];
    return classes.join(" ");
  };

  if (!visible) return null;

  return (
    <div className={getToastClasses()}>
      <span>{getIcon()}</span>
      <span className={styles.message}>{message}</span>
      {showCloseButton && (
        <button
          onClick={handleDismiss}
          className={styles.closeButton}
          aria-label="Close toast"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Toast;
