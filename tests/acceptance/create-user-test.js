import { click, currentURL, fillIn, visit, pauseTest  } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Create User', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('create-user-as-user', async function(assert) {
    let newUser = this.server.create("user", {userName: 'userName 1', password: 'password 1', role: 'user'});
    let newEntity = this.server.create("entity", {name: 'userName 1'});
    let newPermission = this.server.create("permission", {user: newUser, entity: newEntity});

    await visit('/login');
    await fillIn('input#login-username', 'userName 1');
    await fillIn('input#login-password', 'password 1');
    await click('.login-button');

    assert.equal(currentURL(), '/entities');
    await click('.create-user');
    assert.equal(currentURL(), '/entities');
  });

  test('create-user-as-admin', async function(assert) {
    let newUser = this.server.create("user", {userName: 'userName 1', password: 'password 1', role: 'admin'});
    let newEntity = this.server.create("entity", {name: 'userName 1'});
    let newPermission = this.server.create("permission", {user: newUser, entity: newEntity});

    await visit('/login');
    await fillIn('input#login-username', 'userName 1');
    await fillIn('input#login-password', 'password 1');
    await click('.login-button');

    assert.equal(currentURL(), '/entities');
    await click('.create-user');
    assert.equal(currentURL(), '/create-users');

    await fillIn('input#firstName', 'interesting Name');
    await fillIn('input#lastName', 'lastName');
    await fillIn('input#userName', 'username');
    await fillIn('input#password', 'password');
    await fillIn('input#role', 'user');

    await click('.save-user');
    assert.equal(currentURL(), '/entities');

    await click('.logout-button');
    assert.equal(currentURL(), '/login');
    //log in as new user
    await fillIn('input#login-username', 'userName');
    await fillIn('input#login-password', 'password');
    await click('.login-button');
    assert.equal(currentURL(), '/entities');


  });

});
