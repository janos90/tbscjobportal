import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FormRoute extends Route {
  @service store;
  async model(params) {
    this.store.query('form', {
      filter: {
        entity: params.entity_id
      }
    }).then(function(forms) {
      return forms
    })
  }
}
