import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';



export default class EntityRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('entity',params.entity_id );
  }

  @action
  logout() {
    this.transitionTo('login');
  }
  isAdmin() {
    return false;
  }
  @action
  selectEntity(){
    this.transitionTo('authenticated.entities');
  }

}
