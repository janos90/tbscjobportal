import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class JobModel extends Model {
  @attr firstName
  @attr lastName
  @attr userName
  @attr password
  @attr defaultSort
  @attr defaultFilter
  @attr role

  @hasMany('permission', { inverse: 'user' }) permissions;
  @hasMany('job', { inverse: 'createdBy' }) jobs;

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
