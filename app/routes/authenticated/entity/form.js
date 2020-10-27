import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FormRoute extends Route {
  @service store;
  async model(params) {
    return this.store.find('form', params.form_id);
  }
}
