import { configure, addDecorator } from '@storybook/react';
import { withGraphCMS } from '@focus-reactive/storybook-addon-graphcms';
import '@storybook/addon-console';

const CMS_TOKEN = 'ADD-TOKEN';
const CMS_ENDPOINT = 'ADD-ENDPOINT';

addDecorator(
  withGraphCMS({
    endpoint: CMS_ENDPOINT,
    token: CMS_TOKEN,
  })
);

configure(require.context('../content', true, /\.stories\.js$/), module);
