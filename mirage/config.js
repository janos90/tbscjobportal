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
  this.get('/section', (schema, request) => {
    return schema.section.all();
  });
  this.get('/section/:id', (schema, request) => {
    return schema.section.find(request.params.id);
  });

  this.get('/subsection', (schema, request) => {
    return schema.subsection.all();
  });
  this.get('/subsection/:id', (schema, request) => {
    return schema.subsection.find(request.params.id);
  });

  this.get('/element', (schema, request) => {
    return schema.element.all();
  });
  this.get('/element/:id', (schema, request) => {
    return schema.element.find(request.params.id);
  });

}
