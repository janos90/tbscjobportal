import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `name ${i}`;
  },
  image(i) {
    return `image ${i}`;
  },
  email(i) {
    return `email ${i}`;
  },
  phone(i) {
    return `phone ${i}`;
  },
  address(i) {
    return `address ${i}`;
  },

});

// @belongsTo('entity', { inverse: 'children' }) parent;
// @hasMany('entity', { inverse: 'parent' }) children;
//
// @hasMany('form', { inverse: 'entity' }) forms;
// @hasMany('permission', { inverse: 'entity' }) permissions;
// @hasMany('form', { inverse: 'suppliers' }) listings;
