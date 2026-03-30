import { Envelope } from "phosphor-react";
import {
  TextInput,
  type TextInputInputProps,
  type TextInputRootProps,
} from "./TextInput";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address" />
      </>
    ),
  },
  argTypes: {},
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputInputProps> = {};

export const WithoutIcon: StoryObj<TextInputInputProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
};
