import { configure, addDecorator } from '@storybook/react';
import { withGraphCMS } from '@focus-reactive/storybook-addon-graphcms';
// import '@storybook/addon-console';

const CMS_TOKEN = process.env.CMS_TOKEN;
const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

addDecorator(
  withGraphCMS({
    endpoint: CMS_ENDPOINT,
    token: CMS_TOKEN,
  })
);

configure(require.context('../content', true, /\.stories\.js$/), module);
