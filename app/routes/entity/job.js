import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class JobRoute extends Route {
  @service store;
  async model(params) {
    return this.store.find('job', params.job_id);
  }
}
