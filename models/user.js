// Copyright 2004-present Facebook. All Rights Reserved.

const realResult = {
  age: 26,
  name: 'Real name',
}

// export default {
//   getAuthenticated: async () => new Promise((resolve, reject) => {
//     resolve(realResult);
//   })
// };

module.exports = {
  getAuthenticated: async () => new Promise((resolve, reject) => {
    resolve(realResult);
  })
}
