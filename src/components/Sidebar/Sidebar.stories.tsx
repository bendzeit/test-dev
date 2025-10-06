import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import {
  SidebarWithTrigger,
  AlwaysOpenSidebar,
  simpleMenuItems,
  nestedMenuItems,
  deepNestedMenuItems,
  customTestMenuItems,
} from "./__stories__";

const meta: Meta<typeof Sidebar> = {
  title: "Design System/Molecules/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A slide-out navigation sidebar with nested menu support, keyboard navigation, and smooth animations. Slides in from the right and can be closed by clicking outside, pressing Escape, or using the close button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number", min: 200, max: 500, step: 20 },
      description: "Width of the sidebar in pixels",
    },
    title: {
      control: { type: "text" },
      description: "Title displayed in the sidebar header",
    },
    isOpen: {
      control: { type: "boolean" },
      description: "Controls sidebar visibility",
    },
    menuItems: {
      description: "Array of menu items with optional nested children",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: nestedMenuItems,
    title: "Interactive Sidebar",
    width: 320,
    isOpen: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls below to experiment with different sidebar configurations and see how they affect the component behavior.",
      },
    },
  },
};

export const BasicSidebar: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: simpleMenuItems,
    title: "Simple Menu",
    width: 280,
  },
  parameters: {
    docs: {
      description: {
        story: "Basic sidebar with simple menu items, no nesting.",
      },
    },
  },
};

export const NestedMenus: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: nestedMenuItems,
    title: "E-commerce Admin",
    width: 320,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar with one level of nested menu items that can be expanded and collapsed.",
      },
    },
  },
};

export const DeepNesting: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: deepNestedMenuItems,
    title: "Admin Panel",
    width: 350,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar with two levels of nested menu items for complex navigation hierarchies.",
      },
    },
  },
};

export const WideSidebar: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: nestedMenuItems,
    title: "Wide Sidebar",
    width: 400,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Wider sidebar configuration for applications with longer menu labels.",
      },
    },
  },
};

export const CompactSidebar: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: simpleMenuItems,
    title: "Compact",
    width: 240,
  },
  parameters: {
    docs: {
      description: {
        story: "Narrow sidebar configuration for space-constrained layouts.",
      },
    },
  },
};

export const AlwaysVisible: Story = {
  render: AlwaysOpenSidebar,
  args: {
    menuItems: nestedMenuItems,
    title: "Navigation Menu",
    width: 320,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar shown in its open state for easier inspection and testing.",
      },
    },
  },
};

export const EdgeCases: Story = {
  render: SidebarWithTrigger,
  args: {
    menuItems: customTestMenuItems,
    title: "Edge Cases Test",
    width: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Test various edge cases: items without icons, long labels, empty submenus, and external links.",
      },
    },
  },
};
