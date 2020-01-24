// Copyright 2004-present Facebook. All Rights Reserved.

//import user from '../models/user';
const user = require('../models/user');

jest.mock('../models/user');

test('if user model is mocked', async () => {
  expect(await user.getAuthenticated()).toEqual({age: 622, name: 'Mock name'});  
});

test('if user model getAuthenticatd is called', async () => {  
  const spy = jest.spyOn(user, 'getAuthenticated');
  const result = await user.getAuthenticated();
  
  expect(result).toEqual({age: 622, name: 'Mock name'});  
  expect(spy).toHaveBeenCalled();
  spy.mockClear();
});

test('if user model getAuthenticatd is not called', async () => {  
  const spy = jest.spyOn(user, 'getAuthenticated');
  expect(spy).not.toHaveBeenCalled();
  spy.mockClear();
});

