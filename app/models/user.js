import Model, { attr } from '@ember-data/model';

export default class JobModel extends Model {
  @attr jobNumber;
  @attr firstName
  @attr lastName
  @attr permissions
  @attr userName
  @attr password
  @attr defaultSort
  @attr defaultFilter


  get fullName() {
    return this.firstName + " " + this.lastName;
  }

}
