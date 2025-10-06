import Sidebar from "../../../Sidebar";
import styles from "../../styles/storyStyles.module.css";

type AlwaysOpenSidebarProps = React.ComponentProps<typeof Sidebar>;

export const AlwaysOpenSidebar = (args: AlwaysOpenSidebarProps) => {
  return (
    <div className={styles.alwaysOpenContainer}>
      <div className={styles.alwaysOpenContent}>
        <h3 className={styles.demoTitle}>Always Open Sidebar</h3>
        <p className={styles.demoDescription}>
          This story shows the sidebar in its open state for easier inspection.
        </p>
      </div>
      <Sidebar
        {...args}
        isOpen={true}
        onClose={() => console.log("Close clicked")}
      />
    </div>
  );
};
