// Copyright 2004-present Facebook. All Rights Reserved.

//import user from '../models/user';
const user = require('../models/user');

test('if orginal user model', async () => {
  expect(await user.getAuthenticated()).toEqual({age: 26, name: 'Real name'});
});
