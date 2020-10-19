import EmberRouter from '@ember/routing/router';
import config from 'tbscjobportal/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('entity', function() {
    this.route('jobs', { path: '/job/:job_id' });
    this.route('joblist');
    this.route('form');
    this.route('settings');
  })
});
