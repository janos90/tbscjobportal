import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SettingsRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('user', '20');
  }

  @action
  saveUser() {
    let self = this;
    model.userName = this.get('controller').get('userName')
    model.password = this.get('controller').get('password')
    model.firstName = this.get('controller').get('firstName')
    model.lastName = this.get('controller').get('lastName')
    model.save().then(function() {
      self.transitionTo('authenticated.entity.jobs');
    })
  }
}
