import { useState } from "react";
import Toast from "../../../Toast";
import styles from "../../styles/toastStyles.module.css";

export const MultipleToastsDemo = () => {
  const [toasts, setToasts] = useState<
    Array<{
      id: number;
      type: "success" | "error" | "warning" | "info";
      message: string;
    }>
  >([]);
  const [nextId, setNextId] = useState(1);

  const addToast = (
    type: "success" | "error" | "warning" | "info",
    message: string
  ) => {
    const newToast = { id: nextId, type, message };
    setToasts((prev) => [...prev, newToast]);
    setNextId((prev) => prev + 1);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 4000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className={styles.multipleToastsContainer}>
      <div className={styles.toastButtonsRow}>
        <button
          onClick={() => addToast("success", "Success message!")}
          className={`${styles.toastButton} ${styles.toastButtonSuccess}`}
        >
          Add Success
        </button>
        <button
          onClick={() => addToast("error", "Error occurred!")}
          className={`${styles.toastButton} ${styles.toastButtonError}`}
        >
          Add Error
        </button>
        <button
          onClick={() => addToast("warning", "Warning message!")}
          className={`${styles.toastButton} ${styles.toastButtonWarning}`}
        >
          Add Warning
        </button>
        <button
          onClick={() => addToast("info", "Info message!")}
          className={`${styles.toastButton} ${styles.toastButtonInfo}`}
        >
          Add Info
        </button>
      </div>
      <p className={styles.toastDescription}>
        Click the buttons above to add multiple toasts. Note: In a real
        implementation, you'd typically use a toast manager to handle stacking.
      </p>
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className={styles.toastItem}
          style={{
            bottom: `${20 + index * 80}px`,
            right: "20px",
            zIndex: 1000 + index,
          }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            duration={0} // Handled by parent
            showCloseButton={true}
            onDismiss={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};
