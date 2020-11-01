import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EntityRoute extends Route {
  @service store;
  async model() {
    let entity = this.modelFor('authenticated.entity');
    return entity;
  }

  @action
  saveEntity() {
    let self = this;
    let model = this.modelFor('authenticated.entity');

    model.name = this.get('controller').get('name')
    model.image = this.get('controller').get('image')
    model.save().then(function() {
      self.transitionTo('authenticated.entity.jobs');
    })

  }

  @action
  deleteEntity() {
    let model = this.modelFor('authenticated.entity');

    let self = this;
    model.deleteRecord()
    model.save().then(function() {
      self.transitionTo('authenticated.entities');
    })

  }

}
