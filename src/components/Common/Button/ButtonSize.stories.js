import React from "react";
import Button from "./Button";

export default {
  title: "Common/Button/Size",
  component: Button,
  args: {
    color: "btn-primary",
    children: "Button",
  },
};

const Template = (args) => (
  <Button onClick={() => console.log("click button")} {...args} />
);

export const LgSize = Template.bind({});
LgSize.args = { size: "btn-lg" };
export const SmSize = Template.bind({});
SmSize.args = { size: "btn-sm" };
export const XsSize = Template.bind({});
XsSize.args = { size: "btn-xs" };
