  import Model, { attr } from '@ember-data/model';
  export default class JobModel extends Model {
    @attr name;
    @attr provides;
    @attr suppliers;
    @attr forms;
    @attr image;
  }
