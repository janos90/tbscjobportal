import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `form ${i}`;
  },
  description(i) {
    return `description for form ${i}`;
  }


});
