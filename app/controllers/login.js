import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;

  @tracked identification;
  @tracked password;

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }
  @action
  async login() {
    let self=this;
    this.store.query('user', {
      filter: {
        userName: this.identification,
        password: this.password
      }
    }).then(function(users) {
      let user = users.get('firstObject')
      console.log("then user query: ", user);
      self.session.data.user = user;
      self.transitionToRoute('authenticated.entities');
    })
  }
}
