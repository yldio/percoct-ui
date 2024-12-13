import { type StorybookConfig } from "@storybook/react-vite";
import type { AddonOptionsVite } from "@storybook/addon-coverage";

const coverageConfig: AddonOptionsVite = {
  istanbul: {
    include: ["**/src/*", "**/src/**"],
    exclude: ["**/exampleDirectory/**"],
    checkProd: false,
    forceBuildInstrument: true,
  },
};

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    {
      name: "@storybook/addon-coverage",
      options: coverageConfig,
    },
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
