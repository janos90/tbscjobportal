import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

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
    await visit('/login');
    await fillIn('input#login-username', 'good Username');
    await fillIn('input#login-password', 'good Password');
    await click('.login-button');

    // The user is not redirected
    assert.equal(currentURL(), '/authenticated/entities');
  });



});
