import Route from '@ember/routing/route';

export default class AuthenticatedManageUsersRoute extends Route {
  beforeModel(transition) {
    if(!this.session.data.user) {
      this.transitionTo('login');
    } else if (!(this.session.data.user.role === 'admin')) {
      this.transitionTo('login');
    }
  }

  async model() {
    return this.store.findAll('user')
  }
  @action
  updateUser(selectedUser) {

  }

  @action
  addUser() {

  }


}
