import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class JobController extends Controller {
  @service store;

  @action
  closeJob() {
    console.log('got heere');
    var self = this;
    function transitionToJobs() {
      self.transitionTo('authenticated.entity.jobs');
    }
    function failure(reason) {
      alert("Job status didnt update" + reason)
    }
    let model = this.get('model')
    model.status = 'closed';
    model
    .save()
    .then(transitionToJobs)
    .catch(failure);

  }

  @action
  openJob() {
    console.log('got heere2');
    var self = this;
    function transitionToJobs() {
      self.transitionTo('authenticated.entity.jobs');
    }
    function failure(reason) {
      alert("Job status didnt update" + reason)
    }
    model.status = 'open';
    model
    .save()
    .then(transitionToJobs)
    .catch(failure);
  }
}
