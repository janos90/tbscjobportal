import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class EntitiesRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition) {
    if(!this.session.data.user) {
      this.transitionTo('login')
    }
  }

  async model() {
    return this.store.findAll('entity')
  }

  @action
  logout() {
    this.transitionTo('login');
  }

  @action
  createEntity() {
    this.transitionTo('authenticated.create-entity');
  }

  @action
  createUser() {
    this.transitionTo('authenticated.create-users');
  }


  @action
  manageUsers() {
    this.transitionTo('authenticated.manage-users');
  }

}
