import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EntitiesRoute extends Route {
  @service store;
  async model(params) {
    console.log(params.user_id);
    return {
      entities: this.store.findAll('entity'),
      user: this.store.findRecord('user', params.user_id)
    }

  }
}
