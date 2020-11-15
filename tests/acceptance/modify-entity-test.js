import { click, currentURL, fillIn, visit, pauseTest  } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Entity Settings', function(hooks) {
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

    await click('.eSettingsLink');
    assert.equal(currentURL(), '/entity/'+newEntity.id+'/entitysettings');


    await fillIn('input#name', 'some other name');
    await fillIn('input#image', 'some other image');

    await click('.saveEntity');
    assert.equal(currentURL(), '/entity/'+newEntity.id);

    assert.equal(document.querySelector('.header-text').textContent, 'some other name');

  });
});
