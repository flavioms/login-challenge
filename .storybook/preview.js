
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { theme } from '../src/styles/theme';
const themes = [theme];

addDecorator(withThemesProvider(themes));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}