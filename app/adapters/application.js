import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`; 
  }
}


// import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import { computed } from '@ember/object';
// import { inject as service } from '@ember/service';
//
// export default class ApplicationAdapter extends JSONAPIAdapter {
//   host = 'http://localhost:4000';
//
//   @service session;
//
//   @computed('session.data.authenticated.access_token')
//   get headers() {
//     let headers = {};
//     if (this.session.isAuthenticated) {
//       // OAuth 2
//       headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`;
//     }
//     headers['Content-type'] = 'application/json;charset=utf-8'
//
//     return headers;
//   }
// }
