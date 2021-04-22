import {Database} from 'arangojs';
import {ARANGO_PASS, ARANGO_URL, ARANGO_USER} from './config';
import UserService from './services/user-service';

const db = new Database({
  url: ARANGO_URL,
});
const userService = new UserService(db);

(async () => {
  db.useBasicAuth(ARANGO_USER, ARANGO_PASS);
  try {
    await db.createDatabase('database');
  } catch (e) {
    if (e.message != 'duplicate database name \'database\'') {
      console.log(e);
    }
  }
  db.useDatabase('database');
  try {
    await db.collection('users').create();
  } catch (e) {
    if (e.message != 'duplicate name') {
      console.log(e);
    }
  }
  await userService.generateUsers(20);
  console.log('20 users created on collection users!');
})();
