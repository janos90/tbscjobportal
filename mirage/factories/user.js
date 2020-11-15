import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName(i) {
    return `firstName ${i}`;
  },
  lastName(i) {
    return `lastName ${i}`;
  },
  userName(i) {
    return `userName ${i}`;
  },
  password(i) {
    return `password ${i}`;
  },
  defaultSort(i) {
    if(i%2) {
      return ``;
    } else {
      return ``;
    }
  },
  defaultFilter(i) {
    if(i%2) {
      return ``;
    } else {
      return ``;
    }
  },
  role(i) {
    if(i%5) {
      return `user`;
    } else {
      return `admin`;
    }
  }
});
