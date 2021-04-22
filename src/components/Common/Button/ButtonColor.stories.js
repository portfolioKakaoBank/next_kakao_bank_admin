import React from "react";
import Button from "./Button";
// import Center from "../../Utility/Center/Center";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Common/Button/Color",
  component: Button,
  args: {
    children: "Button",
  },
  // 개별로 데코레이터 추가시 적용
  // decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => (
  // <Button {...actions("onClick", "onMouseOver")} {...args} />
  <Button onClick={() => console.log("click button")} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // variant: "btn-primary",
};
Primary.argTypes = {
  variant: {
    options: [
      "btn-primary",
      "btn-success",
      "btn-info",
      "btn-warning",
      "btn-danger",
      "btn-light",
      "btn-dark",
    ],
    control: {
      type: "select",
    },
  },
};
