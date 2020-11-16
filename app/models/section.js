import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr title;


  @belongsTo('form', { inverse: 'sections' }) form;
  
  @hasMany('subsection', { inverse: 'section' }) subsections;
}
