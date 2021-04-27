import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Common/Button/Type",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => (
  <Button onClick={() => console.log("click button")} {...args} />
);

export const AllType = Template.bind({});
AllType.args = {};
AllType.argTypes = {
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
};

export const DefaultType = Template.bind({});
DefaultType.args = { type: "btn-default" };
export const GreyType = Template.bind({});
GreyType.args = { type: "btn-grey" };
export const PurpleType = Template.bind({});
PurpleType.args = { type: "btn-purple" };
export const IndigoType = Template.bind({});
IndigoType.args = { type: "btn-indigo" };
export const PrimaryType = Template.bind({});
PrimaryType.args = { type: "btn-primary" };
export const InfoType = Template.bind({});
InfoType.args = { type: "btn-info" };
export const YellowType = Template.bind({});
YellowType.args = { type: "btn-yellow" };
export const WarningType = Template.bind({});
WarningType.args = { type: "btn-warning" };
export const PinkType = Template.bind({});
PinkType.args = { type: "btn-pink" };
export const DangerType = Template.bind({});
DangerType.args = { type: "btn-danger" };
export const SuccessType = Template.bind({});
SuccessType.args = { type: "btn-success" };
export const GreenType = Template.bind({});
GreenType.args = { type: "btn-green" };
export const LimeType = Template.bind({});
LimeType.args = { type: "btn-lime" };
export const InverseType = Template.bind({});
InverseType.args = { type: "btn-inverse" };
export const LinkType = Template.bind({});
LinkType.args = { type: "btn-link" };
