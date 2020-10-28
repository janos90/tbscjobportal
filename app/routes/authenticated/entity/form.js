import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Ember from 'ember';


export default class FormRoute extends Route {
  @service store;

  async model(params) {
    return this.store.find('form', params.form_id);
  }

  @action
  saveJob() {

    var newJob = this.store.createRecord('job', {
      status: 'open',
      title: this.get('controller').get('title'),
      owner: this.get('controller').get('owner'),
      suburb: this.get('controller').get('suburb'),
      city: this.get('controller').get('city'),
      address: this.get('controller').get('address'),
      bedrooms: this.get('controller').get('bedrooms'),
      createdBy: this.get('controller').get(''),
      createdAt: this.get('controller').get(''),
      entity: this.get('controller').get(''),
      form: this.get('model').id,
      files: this.get('controller').get(''),
      description: this.get('controller').get('description'),
      category: this.get('controller').get('category')
    });

    let self = this;

    function transitionTonewJob(job) {
      self.transitionTo('authenticated.entity.job', job);
    }

    function failure(reason) {
      // handle the error
    }

    newJob
    .save()
    .then(transitionTonewJob)
    .catch(failure);

  }





}
