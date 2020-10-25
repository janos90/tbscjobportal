import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EntityRoute extends Route {
  @service store;
  async model(params) {
    console.log(params);
    console.log(params.entity_id);
    return this.store.findRecord('entity',params.entity_id );
  }
}
