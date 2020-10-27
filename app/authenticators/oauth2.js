import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class OAuth2Authenticator extends OAuth2PasswordGrant {
  serverTokenEndpoint = 'http://localhost:4000/token';
}
