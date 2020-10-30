import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class JobModel extends Model {
  @attr level;
  @belongsTo('user', { inverse: 'permissions' }) user;
  @belongsTo('entity', { inverse: 'permissions' }) entity;
}
