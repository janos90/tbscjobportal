import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr title;


  @belongsTo('form', { inverse: 'sections' }) form;
  @belongsTo('section', { inverse: 'sections' }) parent;
  @hasMany('element', { inverse: 'section' }) elements;
  @hasMany('section', { inverse: 'parent' }) sections;
}
