import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class SubsectionModel extends Model {
  @attr title;


  @belongsTo('section', { inverse: 'subsections' }) section;

  @hasMany('element', { inverse: 'subsection' }) elements;
}
