import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EntityRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('entity',params.entity_id );
  }
}
