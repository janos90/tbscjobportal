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

      providers: this.get('controller').get('providers'),
      suppliers: this.get('controller').get('suppliers'),
      parent: this.get('controller').get('parent')
    });

    let self = this;

    function transitionTonewEntity(entity) {
      console.log('navigate');
      self.transitionTo('authenticated.entity', entity);
    }

    function failure(reason) {
      alert('hello')
    }

    newEntity
    .save()
    .then(transitionTonewEntity)
    .catch(failure);

  }

  @action
  logout() {
    this.transitionTo('login');
  }

  @action
  updateProviders(value) {
    console.log('value', value);
}
}
