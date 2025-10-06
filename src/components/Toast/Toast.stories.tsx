import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import { ToastWithTrigger, MultipleToastsDemo } from "./__stories__";

const meta: Meta<typeof Toast> = {
  title: "Design System/Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Toast notifications provide contextual feedback messages for user actions. They appear at the bottom-right corner with smooth animations and auto-dismiss functionality.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
      description: "Visual style and semantic meaning of the toast",
    },
    message: {
      control: { type: "text" },
      description: "The message content to display",
    },
    duration: {
      control: { type: "number", min: 0, max: 10000, step: 500 },
      description:
        "Auto-dismiss duration in milliseconds (0 = no auto-dismiss)",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Shows a manual close button",
    },
    isVisible: {
      control: { type: "boolean" },
      description: "Controls toast visibility",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Playground Story
export const Playground: Story = {
  render: ToastWithTrigger,
  args: {
    message: "Interactive toast message",
    type: "info",
    duration: 4000,
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls below to experiment with different toast configurations and see how they affect the component behavior.",
      },
    },
  },
};

// Feature Stories - Different types
export const SuccessToast: Story = {
  render: ToastWithTrigger,
  args: {
    message: "Operation completed successfully!",
    type: "success",
    duration: 4000,
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Success toast for positive feedback and completed actions.",
      },
    },
  },
};

export const ErrorToast: Story = {
  render: ToastWithTrigger,
  args: {
    message: "Something went wrong. Please try again.",
    type: "error",
    duration: 4000,
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Error toast for failures and critical issues.",
      },
    },
  },
};

export const WarningToast: Story = {
  render: ToastWithTrigger,
  args: {
    message: "Please check your input and try again.",
    type: "warning",
    duration: 4000,
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Warning toast for cautions and potential issues.",
      },
    },
  },
};

export const InfoToast: Story = {
  render: ToastWithTrigger,
  args: {
    message: "New updates are available for download.",
    type: "info",
    duration: 4000,
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Info toast for general information and updates.",
      },
    },
  },
};

export const WithCloseButton: Story = {
  render: ToastWithTrigger,
  args: {
    message: "This toast has a close button for manual dismissal.",
    type: "info",
    duration: 0, // No auto-dismiss
    showCloseButton: true,
  },
};

export const ShortDuration: Story = {
  render: ToastWithTrigger,
  args: {
    message: "This toast disappears quickly!",
    type: "success",
    duration: 2000,
    showCloseButton: false,
  },
};

export const LongDuration: Story = {
  render: ToastWithTrigger,
  args: {
    message: "This toast stays visible for a longer time.",
    type: "warning",
    duration: 8000,
    showCloseButton: true,
  },
};

export const NoAutoDismiss: Story = {
  render: ToastWithTrigger,
  args: {
    message: "This toast won't auto-dismiss. Use the close button.",
    type: "error",
    duration: 0,
    showCloseButton: true,
  },
};

export const LongMessage: Story = {
  render: ToastWithTrigger,
  args: {
    message:
      "This is a longer message that demonstrates how the toast component handles text that might wrap to multiple lines or be quite lengthy.",
    type: "info",
    duration: 6000,
    showCloseButton: true,
  },
};

export const MultipleToasts: Story = {
  render: MultipleToastsDemo,
};
