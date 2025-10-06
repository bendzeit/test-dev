import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { InputWithState, LoginForm, SearchWithFilters } from "./__stories__";

const meta: Meta<typeof Input> = {
  title: "Design System/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile input component with password visibility toggle, clearable functionality, and comprehensive form support. Built with accessibility and user experience in mind.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
      description: "The input type determines behavior and validation",
    },
    clearable: {
      control: { type: "boolean" },
      description: "Shows a clear button when input has content",
    },
    label: {
      control: { type: "text" },
      description: "Label text displayed above the input",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text shown when input is empty",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input and prevents interaction",
    },
  },
  args: { onChange: () => {} },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: InputWithState,
  args: {
    label: "Interactive Input",
    placeholder: "Try different props...",
    value: "fdgfsdgfdfdasf",
    type: "text",
    clearable: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls below to experiment with all Input props and see how they affect the component behavior.",
      },
    },
  },
};

export const BasicText: Story = {
  render: InputWithState,
  args: {
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    type: "text",
    clearable: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Basic text input for general text entry.",
      },
    },
  },
};

export const WithClearButton: Story = {
  render: InputWithState,
  args: {
    label: "Search",
    placeholder: "Type to search...",
    value: "Sample text",
    type: "text",
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Text input with clearable functionality. The clear button appears when there is content.",
      },
    },
  },
};

export const PasswordField: Story = {
  render: InputWithState,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    type: "password",
    clearable: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password input with visibility toggle. Click the eye icon to show/hide password.",
      },
    },
  },
};

export const PasswordWithClear: Story = {
  render: InputWithState,
  args: {
    label: "New Password",
    placeholder: "Create a strong password",
    value: "secretpassword",
    type: "password",
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password input with both visibility toggle and clear functionality.",
      },
    },
  },
};

export const NumberInput: Story = {
  render: InputWithState,
  args: {
    label: "Age",
    placeholder: "Enter your age",
    value: "",
    type: "number",
    clearable: false,
    min: 0,
    max: 120,
  },
  parameters: {
    docs: {
      description: {
        story: "Number input with min/max validation.",
      },
    },
  },
};

export const EmailInput: Story = {
  render: InputWithState,
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    value: "",
    type: "email",
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Email input with built-in validation and clear functionality.",
      },
    },
  },
};

export const DisabledState: Story = {
  render: InputWithState,
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    value: "Cannot edit this",
    type: "text",
    clearable: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled input state prevents user interaction.",
      },
    },
  },
};

export const LoginFormExample: Story = {
  render: LoginForm,
  parameters: {
    docs: {
      description: {
        story: "Example of using Input components together in a login form.",
      },
    },
  },
};

export const SearchWithFiltersExample: Story = {
  render: SearchWithFilters,
  parameters: {
    docs: {
      description: {
        story:
          "Example of combining multiple Input components for a search interface with filters.",
      },
    },
  },
};
