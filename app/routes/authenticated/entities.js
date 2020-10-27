import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EntitiesRoute extends Route {
  @service store;
  @service session;

  // beforeModel(transition) {
  //   this.get('session').requireAuthentication(transition, 'login');
  // }

  async model() {
    return this.store.findAll('entity')
  }
}
