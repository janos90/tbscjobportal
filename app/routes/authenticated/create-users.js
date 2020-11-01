import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class AuthenticatedManageUsersRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition) {
    if(!this.session.data.user) {
      this.transitionTo('login');
    } else if (!(this.session.data.user.role === 'admin')) {
      alert('Warning youre not an admin');
      // this.transitionTo('login');
    }
  }

  async model() {
    return this.store.findAll('entity')
  }

  @action
  saveUser() {
    var newUser = this.store.createRecord('user', {
      firstName: this.get('controller').get('firstName'),
      lastName: this.get('controller').get('lastName'),
      userName: this.get('controller').get('userName'),
      password: this.get('controller').get('password'),
      defaultSort: this.get('controller').get('defaultSort'),
      defaultFilter: this.get('controller').get('defaultFilter'),
      role: this.get('controller').get('role')
    });
    let self = this;

    function transitionToEntities() {
      console.log('navigate');
      self.transitionTo('authenticated.entities');
    }

    function failure(reason) {
      alert('Oops, something went wrong')
    }

    newUser
    .save()
    .then(transitionToEntities)
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

}
