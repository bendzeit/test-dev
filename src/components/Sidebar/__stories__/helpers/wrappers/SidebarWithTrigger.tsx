import { useState } from "react";
import Sidebar from "../../../Sidebar";
import styles from "../../styles/storyStyles.module.css";

type SidebarWithTriggerProps = React.ComponentProps<typeof Sidebar>;

export const SidebarWithTrigger = (args: SidebarWithTriggerProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className={styles.storyContainer}>
      <button onClick={openSidebar} className={styles.triggerButton}>
        Open Sidebar
      </button>

      <div className={styles.demoContent}>
        <h3 className={styles.demoTitle}>Sidebar Menu Demo</h3>
        <p className={styles.demoDescription}>
          Click the "Open Sidebar" button to see the sidebar slide in from the
          right. You can close it by:
        </p>
        <ul className={styles.demoList}>
          <li className={styles.demoListItem}>
            Clicking the X button in the header
          </li>
          <li className={styles.demoListItem}>
            Clicking on the background overlay
          </li>
          <li className={styles.demoListItem}>Pressing the Escape key</li>
        </ul>
        <p className={styles.demoDescription}>
          The sidebar includes expandable menu items with smooth animations and
          proper keyboard navigation support.
        </p>
      </div>

      <Sidebar {...args} isOpen={isOpen} onClose={closeSidebar} />
    </div>
  );
};
