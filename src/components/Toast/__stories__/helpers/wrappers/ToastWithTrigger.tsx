import { useState } from "react";
import Toast from "../../../Toast";
import styles from "../../styles/toastStyles.module.css";

type ToastWithTriggerProps = React.ComponentProps<typeof Toast>;

export const ToastWithTrigger = (args: ToastWithTriggerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [key, setKey] = useState(0);

  const showToast = () => {
    setKey((prev) => prev + 1);
    setIsVisible(true);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <div className={styles.toastDemoContainer}>
      <button onClick={showToast} className={styles.toastTriggerButton}>
        Show Toast
      </button>
      <p className={styles.toastDemoDescription}>
        Click the button above to show the toast. It will appear in the bottom
        right corner.
      </p>
      {isVisible && (
        <Toast
          key={key}
          {...args}
          isVisible={isVisible}
          onDismiss={handleDismiss}
        />
      )}
    </div>
  );
};
