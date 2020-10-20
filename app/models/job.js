import Model, { attr } from '@ember-data/model';

const PROPERTY_CATEGORIES = [
  'rental',
  'Townhouse'
];

export default class JobModel extends Model {
  @attr jobNumber;
  @attr title;
  @attr owner;
  @attr suburb;
  @attr city;
  @attr address;
  @attr bedrooms;
  @attr createdBy;
  @attr createdAt;
  @attr entity;
  @attr form;
  @attr files;
  @attr description;
  @attr category;

  // get type() {
  //   if (COMMUNITY_CATEGORIES.includes(this.category)) {
  //     return 'Community';
  //   } else {
  //     return 'Standalone';
  //   }
  // }

}
