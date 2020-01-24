// Copyright 2004-present Facebook. All Rights Reserved.

//import user from './user'
const user = require('../models/user');

jest.mock('./user');

test('if user model is mocked', async () => {
  const result = await user.getAuthenticated();
  expect(result).toEqual({age: 622, name: 'Mock name'});
});
