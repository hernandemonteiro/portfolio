module.exports = {
  stories: [
    "../docs/front-end/**/*.stories.mdx",
    "../docs/front-end/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
