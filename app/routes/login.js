import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findAll('user');
  }
}
