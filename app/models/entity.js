import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
  export default class JobModel extends Model {
    @attr name;
    @attr image;

    @hasMany('entity', { inverse: 'suppliers' }) providers;
    @hasMany('entity', { inverse: 'providers' }) suppliers;

    @belongsTo('entity', { inverse: 'children' }) parent;
    @hasMany('entity', { inverse: 'parent' }) children;

    @hasMany('form', { inverse: 'entity' }) forms;
    @hasMany('permission', { inverse: 'entity' }) permissions;
  }
