import type { MenuItem } from "../../Sidebar";

export const simpleMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "📊",
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "profile",
    label: "Profile",
    icon: "👤",
    onClick: () => console.log("Profile clicked"),
  },
  {
    id: "settings",
    label: "Settings",
    icon: "⚙️",
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: "help",
    label: "Help & Support",
    icon: "❓",
    onClick: () => console.log("Help clicked"),
  },
];

export const nestedMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "📊",
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "products",
    label: "Products",
    icon: "📦",
    children: [
      {
        id: "all-products",
        label: "All Products",
        onClick: () => console.log("All Products clicked"),
      },
      {
        id: "categories",
        label: "Categories",
        onClick: () => console.log("Categories clicked"),
      },
      {
        id: "inventory",
        label: "Inventory",
        onClick: () => console.log("Inventory clicked"),
      },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: "🛒",
    children: [
      {
        id: "pending-orders",
        label: "Pending Orders",
        onClick: () => console.log("Pending Orders clicked"),
      },
      {
        id: "completed-orders",
        label: "Completed Orders",
        onClick: () => console.log("Completed Orders clicked"),
      },
      {
        id: "returns",
        label: "Returns & Refunds",
        onClick: () => console.log("Returns clicked"),
      },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: "👥",
    onClick: () => console.log("Customers clicked"),
  },
  {
    id: "reports",
    label: "Reports",
    icon: "📈",
    children: [
      {
        id: "sales-reports",
        label: "Sales Reports",
        onClick: () => console.log("Sales Reports clicked"),
      },
      {
        id: "customer-reports",
        label: "Customer Reports",
        onClick: () => console.log("Customer Reports clicked"),
      },
    ],
  },
];

export const deepNestedMenuItems: MenuItem[] = [
  {
    id: "administration",
    label: "Administration",
    icon: "🔧",
    children: [
      {
        id: "user-management",
        label: "User Management",
        children: [
          {
            id: "users",
            label: "Users",
            onClick: () => console.log("Users clicked"),
          },
          {
            id: "roles",
            label: "Roles & Permissions",
            onClick: () => console.log("Roles clicked"),
          },
          {
            id: "groups",
            label: "User Groups",
            onClick: () => console.log("Groups clicked"),
          },
        ],
      },
      {
        id: "system-settings",
        label: "System Settings",
        children: [
          {
            id: "general",
            label: "General Settings",
            onClick: () => console.log("General Settings clicked"),
          },
          {
            id: "security",
            label: "Security Settings",
            onClick: () => console.log("Security Settings clicked"),
          },
          {
            id: "integrations",
            label: "Integrations",
            onClick: () => console.log("Integrations clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "📊",
    children: [
      {
        id: "overview",
        label: "Overview",
        onClick: () => console.log("Analytics Overview clicked"),
      },
      {
        id: "detailed-reports",
        label: "Detailed Reports",
        children: [
          {
            id: "monthly-reports",
            label: "Monthly Reports",
            onClick: () => console.log("Monthly Reports clicked"),
          },
          {
            id: "yearly-reports",
            label: "Yearly Reports",
            onClick: () => console.log("Yearly Reports clicked"),
          },
          {
            id: "custom-reports",
            label: "Custom Reports",
            onClick: () => console.log("Custom Reports clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: "🎧",
    onClick: () => console.log("Support clicked"),
  },
];

export const customTestMenuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "🏠",
    href: "/home",
  },
  {
    id: "no-icon",
    label: "Item Without Icon",
    onClick: () => console.log("No icon item clicked"),
  },
  {
    id: "long-label",
    label: "This is a very long menu item label that might wrap",
    icon: "📝",
    onClick: () => console.log("Long label clicked"),
  },
  {
    id: "empty-submenu",
    label: "Empty Submenu",
    icon: "📁",
    children: [],
  },
  {
    id: "mixed-content",
    label: "Mixed Content",
    icon: "🔀",
    children: [
      {
        id: "with-icon",
        label: "With Icon",
        icon: "✨",
        onClick: () => console.log("With icon clicked"),
      },
      {
        id: "without-icon",
        label: "Without Icon",
        onClick: () => console.log("Without icon clicked"),
      },
      {
        id: "with-href",
        label: "External Link",
        icon: "🔗",
        href: "https://example.com",
      },
    ],
  },
];
