import React from 'react';
import { Query } from '@focus-reactive/storybook-addon-graphcms';
import { credentials, conferenceTitle, eventYear } from './config';

const queryPages = /* GraphQL */ `
  query($conferenceTitle: ConferenceTitle, $eventYear: EventYear) {
    result: conferenceBrand(where: { title: $conferenceTitle }) {
      id
      status
      year: conferenceEvents(where: { year: $eventYear }) {
        id
        status
        openForTalks
        speakers: pieceOfSpeakerInfoes {
          status
          id
          label
          speaker {
            id
            name
            company
            country
            bio
            githubUrl
            twitterUrl
            mediumUrl
            ownSite
            companySite
            avatar {
              url(
                transformation: {
                  image: { resize: { width: 500, height: 500, fit: crop } }
                  document: { output: { format: jpg } }
                }
              )
            }
          }
        }
      }
    }
  }
`;

export default {
  title: 'JS Nation',
};

export const speakers = Query({
  name: 'Speakers',
  query: queryPages,
  vars: { conferenceTitle, eventYear },
  searchVars: { user: 'UsulPro' },
});
