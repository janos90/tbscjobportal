import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
  export default class JobModel extends Model {
    @attr name;
    @attr image;
    @attr email;
    @attr phone;
    @attr address;

    @belongsTo('entity', { inverse: 'children' }) parent;
    @hasMany('entity', { inverse: 'parent' }) children;

    @hasMany('form', { inverse: 'entity' }) forms;
    @hasMany('permission', { inverse: 'entity' }) permissions;
    @hasMany('form', { inverse: 'suppliers' }) listings;

  }
