import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ElementModel extends Model {
  @attr image;
  @attr text;
  @attr input;
  @attr name;
  @attr radio;

  @belongsTo('subsection', { inverse: 'elements' }) subsection;
}
