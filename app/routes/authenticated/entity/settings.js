import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SettingsRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition) {
    if(!this.session.data.user) {
      this.transitionTo('login')
    }
  }


  async model() {
    return this.store.findRecord('user', this.session.data.user.id);
  }

  @action
  saveUser() {
    let self = this;
    let model = this.session.data.user
    model.userName = this.get('controller').get('userName')
    model.password = this.get('controller').get('password')
    model.firstName = this.get('controller').get('firstName')
    model.lastName = this.get('controller').get('lastName')
    model.save().then(function() {
      this.session.data.user = model;
      self.transitionTo('authenticated.entity.jobs');
    })
  }
}
