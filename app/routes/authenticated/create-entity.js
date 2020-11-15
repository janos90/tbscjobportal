import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthenticatedCreateEntityRoute extends Route {
  @service store;
  @service session;

  async model() {
    return this.store.findAll('entity')
  }


  @action
  saveEntity() {
    var newEntity = this.store.createRecord('entity', {
      name: this.get('controller').get('name'),
      image: this.get('controller').get('image'),
      email: this.get('controller').get('email'),
      phone: this.get('controller').get('phone'),
      address: this.get('controller').get('address'),

      providers: this.get('controller').get('providers'),
      suppliers: this.get('controller').get('suppliers'),
      parent: this.get('controller').get('parent')
    });

    let self = this;

    function transitionToNewEntity(entity) {
      self.transitionTo('authenticated.entity', entity);
    }

    function failure(reason) {
      alert('Creating Entity failed', reason)
      console.log(reason);
    }

    newEntity
    .save()
    .then(transitionToNewEntity)
    .catch(failure);

  }

  @action
  logout() {
    this.transitionTo('login');
  }

  @action
  selectEntity(){
    this.transitionTo('authenticated.entities');
  }

  @action
  updateProviders(value) {
    // console.log('value', value);
  }
}
