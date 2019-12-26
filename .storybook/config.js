const { configure, addDecorator } = require('@storybook/react');
const { withGraphCMS } = require('@focus-reactive/storybook-addon-graphcms');
// import '@storybook/addon-console';

configure(require.context('../content', true, /\.stories\.js$/), module);
