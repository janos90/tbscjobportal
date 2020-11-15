export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://tbsc-portal-api.herokuapp.com';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.get('/users', (schema, request) => {
    return schema.users.all();
  });
  this.get('/users/:id', (schema, request) => {
    return schema.users.find(request.params.id);
  });
  this.post('/users');
  this.patch('/users/:id');

  this.get('/entities', (schema, request) => {
    return schema.entities.all();
  });
  this.get('/entities/:id', (schema, request) => {
    return schema.entities.find(request.params.id);
  });
  this.post('/entities');
  this.patch('/entities/:id');

  this.get('/forms', (schema, request) => {
    return schema.forms.all();
  });
  this.get('/forms/:id', (schema, request) => {
    return schema.forms.find(request.params.id);
  });

  this.get('/sections', (schema, request) => {
    return schema.sections.all();
  });
  this.get('/sections/:id', (schema, request) => {
    return schema.sections.find(request.params.id);
  });

  this.get('/elements', (schema, request) => {
    return schema.elements.all();
  });
  this.get('/elements/:id', (schema, request) => {
    return schema.elements.find(request.params.id);
  });




}
