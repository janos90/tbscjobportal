import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Ember from 'ember';
import RSVP from 'rsvp';


export default class FormRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition) {
    if(!this.session.data.user) {
      this.transitionTo('login')
    }
  }


  async model(params) {
    return this.get('store').find('form', params.form_id, {
      include: 'sections,sections.subsections,sections.subsections.elements'
    });
  }

  @action
  saveJob() {
    var self = this;
    let filesNames = [];
    let files = [];
    if(this.get('controller').get('fileUno')) {
      filesNames.push(this.get('controller').get('fileUno'))
    }
    if(this.get('controller').get('fileDos')) {
      filesNames.push(this.get('controller').get('fileDos'))
    }
    if(this.get('controller').get('fileTres')) {
      filesNames.push(this.get('controller').get('fileTres'))
    }


    var newJob = this.store.createRecord('job', {
      status: 'open',
      title: this.get('controller').get('title'),
      owner: this.get('controller').get('owner'),
      suburb: this.get('controller').get('suburb'),
      city: this.get('controller').get('city'),
      address: this.get('controller').get('address'),
      bedrooms: parseInt(this.get('controller').get('bedrooms'), 10),
      createdBy: self.get('session.data.user.id'),
      entity: this.get('controller').get(''),
      form: this.get('model'),
      description: this.get('controller').get('description'),
      category: this.get('controller').get('category')
    });

    function transitionTonewJob(job) {

      filesNames.forEach(name => {
        var newFile = self.store.createRecord('file', {
          location: name,
          fileType: 'pdf',
          job: job
        })
        newFile.save().then(file => {
          files.push(file)
        })
      })

      self.transitionTo('authenticated.entity.job', job);
    }

    function failure(reason) {
      alert("Job didnt save write " + reason)
    }
    newJob
    .save()
    .then(transitionTonewJob)
    .catch(failure);
  }

  @action
  addFiles(file) {
    console.log(file);

  }
}
