import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  image(i) {
    if(i==5) {
      return `form ${i}`;
    } else {
      return ``;
    }
  },
  text(i) {
    return `question text ${i}`;
  },
  input(i) {
    if (i%2) {
      return 'text';
    } else if(i%3) {
      return 'textArea';
    } else {
      return 'checkbox';
    }
    return `radio`;
  },
  name(i) {
    return `ele name ${i}`;
  },
  radio(i) {
    return `radio ${i}`;
  }

});
