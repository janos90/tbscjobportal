import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class JobRoute extends Route {
  @service store;
  async model(params) {
    return this.store.find('job', params.job_id, {include: 'entity,form, createdBy, files'});
  }
}
