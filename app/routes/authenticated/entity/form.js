import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Ember from 'ember';
import RSVP from 'rsvp';


export default class FormRoute extends Route {
  @service store;
  @service session;


  async model(params) {
    return this.get('store').find('form', params.form_id, {
      include: 'sections,sections.subsections,sections.subsections.elements'});
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
      createdBy: this.session.data.user.fullName,
      entity: this.get('controller').get(''),
      form: this.get('model'),
      files: [],
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
