import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class CreateEntityController extends Controller {

  providers = [];
  suppliers = [];
  parent;

  @action
  updateProviders(value) {
    let oldProviders = this.get('providers')
    if(oldProviders.includes(value)) {
      const index = oldProviders.indexOf(value);
      oldProviders.splice(index, 1);
    } else {
      oldProviders.push(value)
    }
    this.set('providers', oldProviders);
  }

  @action
  updateSuppliers(value) {
    let oldSuppliers = this.get('suppliers')
    if(oldSuppliers.includes(value)) {
      const index = oldSuppliers.indexOf(value);
      oldSuppliers.splice(index, 1);
    } else {
      oldSuppliers.push(value)
    }
    this.set('suppliers', oldSuppliers);
  }

  @action
  updateParent(value) {
    this.set('parent', value);
  }


}
