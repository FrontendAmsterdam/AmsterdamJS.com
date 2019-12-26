const React = require('react');
const {
  Query,
  withGraphCMS,
} = require('@focus-reactive/storybook-addon-graphcms');
const { storiesOf } = require('@storybook/react');

const { credentials, conferenceTitle, eventYear } = require('./config');
const { queriesData, getContent } = require('./index');

const allStories = {};

const addContentStory = async () => {
  const content = await getContent();
  storiesOf('Content Data', module).add('info', () => (
    <div>{JSON.stringify(content)}</div>
  ));
};

addContentStory();

queriesData.forEach(({ queryPages, getData, story }) => {
  allStories[story] = Query({
    name: story,
    query: queryPages,
    vars: { conferenceTitle, eventYear },
    searchVars: { search: '' },
    getData,
  });
});

module.exports = {
  default: {
    title: 'JS Nation',
    decorators: [withGraphCMS(credentials)],
  },
  ...allStories,
};
