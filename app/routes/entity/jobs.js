import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class JobListRoute extends Route {
   @service store;
   async model(params) {
     this.store.query('job', {
       filter: {
         entity: params.entity_id
       }
     }).then(function(jobs) {
       return jobs
     })
   }
}
