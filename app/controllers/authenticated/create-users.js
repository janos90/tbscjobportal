import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class CreateUserController extends Controller {
  readPermissions = [];
  writePermissions = [];
  defaultSort = '';
  defaultFilter = '';
  role = '';

  @action
  updateReadPermissions(value) {
    let oldReadPermissions = this.get('readPermissions')
    if(oldReadPermissions.includes(value)) {
      const index = oldReadPermissions.indexOf(value);
      oldReadPermissions.splice(index, 1);
    } else {
      oldReadPermissions.push(value)
    }
    this.set('readPermissions', oldReadPermissions);
  }

  @action
  updateWritePermissions(value) {
    let oldWritePermissions = this.get('writePermissions')
    if(oldWritePermissions.includes(value)) {
      const index = oldWritePermissions.indexOf(value);
      oldWritePermissions.splice(index, 1);
    } else {
      oldWritePermissions.push(value)
    }
    this.set('writePermissions', oldWritePermissions);
  }

  @action
  selectSort(e) {
    console.log(e);
  }

  @action
  selectFilter(e) {
    console.log(e);
  }

}
