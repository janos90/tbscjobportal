
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class FormModel extends Model {
  @attr name;
  @attr sections;
  @attr description;

  @belongsTo('entity', { inverse: 'forms' }) entity;

  @hasMany('entity', { inverse: 'listings' }) suppliers;
  @hasMany('section', { inverse: 'form' }) sections;

}
