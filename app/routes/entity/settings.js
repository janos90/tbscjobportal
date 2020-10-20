import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsRoute extends Route {
  @service store;
  async model(params) {
    return this.store.find('user', 20);
  }
}
