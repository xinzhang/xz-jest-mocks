// Copyright 2004-present Facebook. All Rights Reserved.

const lodash = jest.genMockFromModule('lodash');

lodash.head = arr => 5;

module.exports = {
  lodash
};
//export default lodash;
