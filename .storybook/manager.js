import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://marvelous-milos.herokuapp.com/icon.svg',
    brandTitle: 'Components',
    brandUrl: 'https://marvelous-milos.herokuapp.com',
  },
});
