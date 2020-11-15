import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('testing /login', async function(assert) {
    await visit('/login');
    await click('.login-button');

    // The user is not redirected
    assert.equal(currentURL(), '/login');
  });

  test('visiting /login', async function(assert) {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });
});
