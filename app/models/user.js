import Model, { attr } from '@ember-data/model';

export default class JobModel extends Model {
  @attr jobNumber;
  @attr fistName
  @attr lastName
  @attr permissions
  @attr userName
  @attr password


  get name() {
    return this.firstName+" " + this.lastname
  }

}
