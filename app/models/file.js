import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
export default class FileModel extends Model {
  @attr location;
  @attr fileType;

  @belongsTo('job', { inverse: 'files' }) job;


}
