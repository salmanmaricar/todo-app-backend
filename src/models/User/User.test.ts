import { User } from './User';

describe('User', () => {
  const user = new User('John');

  it('can get correct initials', () => {
    const initials = user.getInitials();

    expect(initials).toEqual('J');
  });

  it('can get name', () => {
    expect(user.name).toEqual('John');
  });

  it('can set name', () => {
    expect(user.name).toEqual('John');
    user.name = 'Bob';
    expect(user.name).toEqual('Bob');
  });
});
