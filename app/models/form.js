import Model, { attr } from '@ember-data/model';
export default class FormModel extends Model {
  @attr name;
  @attr sections;
  @attr description;
  @attr entity;

}
