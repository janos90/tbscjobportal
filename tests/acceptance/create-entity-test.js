import { click, currentURL, fillIn, visit, pauseTest  } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Create Entity', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('create-entity', async function(assert) {
    let newUser = this.server.create("user", {userName: 'userName 1', password: 'password 1', role: 'admin'});
    let newEntity = this.server.create("entity", {name: 'userName 1'});
    let newPermission = this.server.create("permission", {user: newUser, entity: newEntity});

    await visit('/login');
    await fillIn('input#login-username', 'userName 1');
    await fillIn('input#login-password', 'password 1');
    await click('.login-button');

    assert.equal(currentURL(), '/entities');
    await click('.create-entity');
    assert.equal(currentURL(), '/create-entity');

    await fillIn('input#name', 'interesting Name');
    await fillIn('input#image', 'image-1');
    await fillIn('input#email', 'abc@123.com');
    await fillIn('input#phone', '022211122');
    await fillIn('input#address', '33 wallaby way, sydney');

    await click('.save-entity');
    assert.equal(currentURL(), '/entity/2');
  });
});
