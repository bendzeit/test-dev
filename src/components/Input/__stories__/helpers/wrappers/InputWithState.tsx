import { useState } from "react";
import Input from "../../../Input";

type InputWithStateProps = React.ComponentProps<typeof Input>;

export const InputWithState = (args: InputWithStateProps) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};
