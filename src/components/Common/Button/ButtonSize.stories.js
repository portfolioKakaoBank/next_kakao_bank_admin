import React from "react";
import Button from "./Button";

export default {
  title: "Common/Button/Size",
  component: Button,
};

export const largeButton = () => (
  <Button variant="btn-primary btn-lg">Large Button</Button>
);
export const defaultButton = () => (
  <Button variant="btn-primary">Default Button</Button>
);
export const smallButton = () => (
  <Button variant="btn-primary btn-sm">Small Button</Button>
);
export const extraButton = () => (
  <Button variant="btn-primary btn-xs">Extra Button</Button>
);
