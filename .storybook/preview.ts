import type { Preview } from "@storybook/react";
import {extendTheme} from "@chakra-ui/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme: extendTheme()
    }
  },
};

export default preview;
