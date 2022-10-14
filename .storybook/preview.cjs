import { themes } from '@storybook/theming'
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css';

initialize({
  onUnhandledRequest: 'bypass' //para não mostrar o log das req que não tratamos com msw
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}