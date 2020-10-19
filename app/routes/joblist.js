import Route from '@ember/routing/route';
import fetch from 'fetch';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class JobsRoute extends Route {
  async model() {
    let response = await fetch('/api/jobs.json');
    let { data } = await response.json();

    return data.map(model => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}
