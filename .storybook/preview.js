import { addDecorator } from "@storybook/react";
import Center from "../src/components/Utility/Center/Center";
import { withConsole } from "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    // 알파벳 순서로 정렬
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    locales: "ko-KR",
  },
};

// decorators 추가 ( 6.0 이후 변경 )
export const decorators = [
  (story) => <Center>{story()}</Center>,
  (unboundStoryFn, context) => withConsole()(unboundStoryFn)(context),
];
