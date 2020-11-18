import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class EntitiesController extends Controller {
  @service session;
  isAdmin = this.session.data.user.role === 'admin';
}
