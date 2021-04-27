import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Common/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => (
  <Button onClick={() => console.log("click button")} {...args} />
);

export const GlobalButton = Template.bind({});
GlobalButton.args = {};
GlobalButton.argTypes = {
  type: {
    options: [
      "btn-default",
      "btn-grey",
      "btn-purple",
      "btn-indigo",
      "btn-primary",
      "btn-info",
      "btn-yellow",
      "btn-warning",
      "btn-pink",
      "btn-danger",
      "btn-success",
      "btn-green",
      "btn-lime",
      "btn-inverse",
      "btn-link",
    ],
    control: {
      type: "select",
    },
  },
  size: {
    options: ["btn-lg", "btn-sm", "btn-xs"],
    control: {
      type: "select",
    },
  },
  outLine: {
    options: [
      "btn-outline-primary",
      "btn-outline-secondary",
      "btn-outline-success",
      "btn-outline-info",
      "btn-outline-warning",
      "btn-outline-danger",
      "btn-outline-light",
      "btn-outline-dark",
      "btn-outline-inverse",
      "btn-outline-black",
      "btn-outline-white",
      "btn-outline-grey",
      "btn-outline-muted",
      "btn-outline-silver",
      "btn-outline-lime",
      "btn-outline-aqua",
    ],
    control: {
      type: "select",
    },
  },
};
