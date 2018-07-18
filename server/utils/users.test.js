const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'julie',
      room: 'Node Course'
    },]
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'jy',
      room: 'HP Fan Club'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove user', () => {
    const userId = '2'
    const testResult = users.removeUser(userId);

    expect(testResult.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '242'
    const testResult = users.removeUser(userId);

    expect(testResult).toBe(undefined);
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const testResult = users.getUser('1');

    expect(testResult).toEqual(users.users[0]);
  });

  it('should not find user', () => {
    const testResult = users.getUser('444');

    expect(testResult).toBe(undefined);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('Node Course');

    expect(userList).toEqual(['mike', 'julie'])
  });

  it('should return names for react course', () => {
    const userList = users.getUserList('React Course');

    expect(userList).toEqual(['jen'])
  });

});
