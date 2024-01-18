import type { StorybookConfig } from "@storybook/nextjs";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@chakra-ui/storybook-addon'
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (config) => {
    if (config.resolve != null) {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }
    return config;
  }
};
export default config;
