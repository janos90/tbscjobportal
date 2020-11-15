import { click, currentURL, fillIn, visit, pauseTest  } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | User Settings', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('set settings', async function(assert) {
    let newUser = this.server.create("user", {userName: 'userName 1', password: 'password 1'});
    let newEntity = this.server.create("entity", {name: 'userName 1'});
    let newPermission = this.server.create("permission", {user: newUser, entity: newEntity});

    await visit('/login');
    await fillIn('input#login-username', 'userName 1');
    await fillIn('input#login-password', 'password 1');
    await click('.login-button');

    await click('#entity-'+newEntity.id);
    assert.equal(currentURL(), '/entity/'+newEntity.id);

    await click('.settingsLink');
    assert.equal(currentURL(), '/entity/'+newEntity.id+'/settings');

    await fillIn('input#userName', 'some other userName');
    await fillIn('input#password', 'some other password');
    await fillIn('input#firstName', 'some other firstName');
    await fillIn('input#lastName', 'some other lastName');

    await click('.saveUser');
    assert.equal(currentURL(), '/entity/'+newEntity.id);

    await click('.settingsLink');
    assert.equal(currentURL(), '/entity/'+newEntity.id+'/settings');

    assert.equal(document.querySelector('.settings-header').textContent, ' Settings for some other firstName some other lastName');

  });
});
