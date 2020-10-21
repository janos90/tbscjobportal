import Model, { attr } from '@ember-data/model';
export default class JobModel extends Model {
  @attr jobNumber;
  @attr status;
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
}
