import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
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
  @attr description;
  @attr category;

  @belongsTo('user', { inverse: 'jobs' }) createdBy;
  @belongsTo('entity', { inverse: 'jobs' }) entity;
  @belongsTo('form', { inverse: 'jobs' }) form;
  @hasMany('file', { inverse: 'job' }) files;

}
