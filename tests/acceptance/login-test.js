import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /login', async function(assert) {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });

  test('users cant login without details', async function(assert) {
    await visit('/login');
    await click('.login-button');
    // The user is not redirected
    assert.equal(currentURL(), '/login');
  });

  test('users cant login with wrong details', async function(assert) {
    await visit('/login');
    await fillIn('input#login-username', 'Bad Username');
    await fillIn('input#login-password', 'Bad Password');
    await click('.login-button');
    // The user is not redirected
    assert.equal(currentURL(), '/login');
  });

  test('users can login with correct details', async function(assert) {
    this.server.create("user", {userName: 'userName 1', password: 'password 1'});
    await visit('/login');
    await fillIn('input#login-username', 'userName 1');
    await fillIn('input#login-password', 'password 1');
    await click('.login-button');

    // The user is redirected
    assert.equal(currentURL(), '/entities');
  });



});
