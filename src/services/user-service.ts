import {Database, DocumentCollection} from 'arangojs';
import {User} from '../entities/user';
import faker from 'faker';

export default class UserService {
  db: Database
  collection: DocumentCollection<User>
  constructor(db: Database) {
    this.db = db;
    this.collection = this.db.collection('users');
  }

  async generateUsers(num: number): Promise<void> {
    for (let i = 0; i < num; i++) {
      const user = new User(
          faker.internet.email(),
          faker.name.firstName(),
          faker.name.lastName(),
      );
      await this.collection.save(user);
    }
  }
}
