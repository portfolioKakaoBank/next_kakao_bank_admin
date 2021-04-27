import React from "react";
import Button from "./Button";

export default {
  title: "Common/Button/Outline",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => (
  <Button onClick={() => console.log("click button")} {...args} />
);

export const PrimaryOutLine = Template.bind({});
PrimaryOutLine.args = { outLine: "btn-outline-primary" };
export const SecondaryOutLine = Template.bind({});
SecondaryOutLine.args = { outLine: "btn-outline-secondary" };
export const SuccessOutLine = Template.bind({});
SuccessOutLine.args = { outLine: "btn-outline-success" };
export const InfoOutLine = Template.bind({});
InfoOutLine.args = { outLine: "btn-outline-info" };
export const WarningOutLine = Template.bind({});
WarningOutLine.args = { outLine: "btn-outline-warning" };
export const DangerOutLine = Template.bind({});
DangerOutLine.args = { outLine: "btn-outline-danger" };
export const LightOutLine = Template.bind({});
LightOutLine.args = { outLine: "btn-outline-light" };
export const DarkOutLine = Template.bind({});
DarkOutLine.args = { outLine: "btn-outline-dark" };
export const InverseOutLine = Template.bind({});
InverseOutLine.args = { outLine: "btn-outline-inverse" };
export const BlackOutLine = Template.bind({});
BlackOutLine.args = { outLine: "btn-outline-black" };
export const WhiteOutLine = Template.bind({});
WhiteOutLine.args = { outLine: "btn-outline-white" };
export const GreyOutLine = Template.bind({});
GreyOutLine.args = { outLine: "btn-outline-grey" };
export const MutedOutLine = Template.bind({});
MutedOutLine.args = { outLine: "btn-outline-muted" };
export const SilverOutLine = Template.bind({});
SilverOutLine.args = { outLine: "btn-outline-silver" };
export const LimeOutLine = Template.bind({});
LimeOutLine.args = { outLine: "btn-outline-lime" };
export const AquaOutLine = Template.bind({});
AquaOutLine.args = { outLine: "btn-outline-aqua" };
