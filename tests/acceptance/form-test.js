import { click, currentURL, fillIn, visit, pauseTest  } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | form', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /forms', async function(assert) {
    let newUser = this.server.create("user", {userName: 'userName 1', password: 'password 1'});
    let newEntity = this.server.create("entity", {name: 'userName 1'});
    let newPermission = this.server.create("permission", {user: newUser, entity: newEntity});


    let newform = server.create("form", {
      sections: server.createList("section", 10)
    })

    server.createList("section", 10, {form: newform})



    await visit('/login');
    await fillIn('input#login-username', 'userName 1');
    await fillIn('input#login-password', 'password 1');
    await click('.login-button');

    await click('#entity-'+newEntity.id);
    assert.equal(currentURL(), '/entity/'+newEntity.id);

    await click('.formsLink');
    assert.equal(currentURL(), '/entity/'+newEntity.id+'/forms');

    await click('.form-1');
    assert.equal(currentURL(), '/entity/'+newEntity.id+'/form/1');

    await fillIn('input.form-title', 'form-title 1');
    await fillIn('input.form-owner', 'form-owner 1');
    await fillIn('input.form-suburb', 'form-suburb 1');
    await fillIn('input.form-city', 'form-city 1');
    await fillIn('input.form-address', 'form-address 1');
    await fillIn('input.form-bedrooms', 'form-bedrooms 1');
    await fillIn('input.form-description', 'form-description 1');
    await fillIn('input.form-category', 'form-category 1');
    // await pauseTest();

    await click('.form-save');

    assert.equal(currentURL(), '/entity/'+newEntity.id+'/form/1');


  })
});
