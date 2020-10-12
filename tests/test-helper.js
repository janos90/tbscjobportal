import Application from 'tbscjobportal/app';
import config from 'tbscjobportal/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
