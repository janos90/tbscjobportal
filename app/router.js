import EmberRouter from '@ember/routing/router';
import config from 'tbscjobportal/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('authenticated', { path: '' }, function(){
    this.route('entities');
    this.route('entity', { path: 'entity/:entity_id' }, function() {
      this.route('jobs');
      this.route('job', { path: 'job/:job_id' });
      this.route('forms');
      this.route('form', { path: 'form/:form_id' });
      this.route('entitysettings');
      this.route('settings');
    });
    this.route('create-entity');
    this.route('create-users');
    this.route('manage-users');
  })
});
