import { useState, useEffect, useRef } from "react";
import styles from "./Sidebar.module.css";

export type MenuItem = {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  children?: MenuItem[];
};

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  width?: number;
  title?: string;
};

function Sidebar({
  isOpen,
  onClose,
  menuItems,
  width = 320,
  title = "Menu",
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      toggleExpanded(item.id);
    } else if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      window.location.href = item.href;
    }
  };

  const getMenuItemClasses = (level: number) => {
    const classes = [styles.menuItem];
    if (level === 1) classes.push(styles.menuItemLevel1);
    if (level === 2) classes.push(styles.menuItemLevel2);
    return classes.join(" ");
  };

  const getExpandIconClasses = (isExpanded: boolean) => {
    return `${styles.expandIcon} ${
      isExpanded ? styles.expandIconExpanded : styles.expandIconCollapsed
    }`;
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id}>
        <div
          className={getMenuItemClasses(level)}
          onClick={() => handleItemClick(item)}
        >
          <div className={styles.menuItemContent}>
            {item.icon && <span className={styles.menuIcon}>{item.icon}</span>}
            <span className={styles.menuLabel}>{item.label}</span>
            {hasChildren && (
              <span className={getExpandIconClasses(isExpanded)}>▶</span>
            )}
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const getOverlayClasses = () => {
    return `${styles.overlay} ${
      isOpen ? styles.overlayVisible : styles.overlayHidden
    }`;
  };

  const getSidebarClasses = () => {
    return `${styles.sidebar} ${
      isOpen ? styles.sidebarOpen : styles.sidebarClosed
    }`;
  };

  return (
    <>
      <div className={getOverlayClasses()} onClick={handleBackgroundClick} />
      <div
        ref={sidebarRef}
        className={getSidebarClasses()}
        style={{ width: `${width}px` }}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
        <div className={styles.content}>
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
