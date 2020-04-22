const enhancer = require('./enhancer');

let testCases = [
  {
    name: 'repair: no repair',
    method: 'repair',
    item: {
      name: 'sword',
      durability: 100,
      enhancement: 1,
    },
    newItem: {
      name: 'sword',
      durability: 100,
      enhancement: 1,
    },
  },
  {
    name: 'repair: reapired',
    method: 'repair',
    item: {
      name: 'sword',
      durability: 0,
      enhancement: 1,
    },
    newItem: {
      name: 'sword',
      durability: 100,
      enhancement: 1,
    },
  },
  {
    name: 'succeed: max enhancement',
    method: 'succeed',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 20,
    },
    newItem: {
      name: 'sword',
      durability: 50,
      enhancement: 20,
    },
  },
  {
    name: 'succeed: enhance',
    method: 'succeed',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 19,
    },
    newItem: {
      name: 'sword',
      durability: 50,
      enhancement: 20,
    },
  },
  {
    name: 'fail: 0 durability',
    method: 'fail',
    item: {
      name: 'sword',
      durability: 0,
      enhancement: 1,
    },
    newItem: {
      name: 'sword',
      durability: 0,
      enhancement: 1,
    },
  },
  {
    name: 'fail: enhancement < 15',
    method: 'fail',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 1,
    },
    newItem: {
      name: 'sword',
      durability: 45,
      enhancement: 1,
    },
  },
  {
    name: 'fail: enhancement === 15',
    method: 'fail',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 15,
    },
    newItem: {
      name: 'sword',
      durability: 40,
      enhancement: 15,
    },
  },
  {
    name: 'fail: enhancement === 16',
    method: 'fail',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 16,
    },
    newItem: {
      name: 'sword',
      durability: 40,
      enhancement: 16,
    },
  },
  {
    name: 'fail: enhancement > 16',
    method: 'fail',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 18,
    },
    newItem: {
      name: 'sword',
      durability: 50,
      enhancement: 17,
    },
  },
  {
    name: 'get: enhancement === 0',
    method: 'get',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 0,
    },
    newItem: {
      name: 'sword',
      durability: 50,
      enhancement: 0,
    },
  },
  {
    name: 'get: enhanced',
    method: 'get',
    item: {
      name: 'sword',
      durability: 50,
      enhancement: 10,
    },
    newItem: {
      name: '[+10] sword',
      durability: 50,
      enhancement: 10,
    },
  },
];

for (let testCase of testCases) {
  switch(testCase.method) {
    case 'repair':
      test(testCase.name, () => {
        debugger;
        expect(enhancer.repair(testCase.item).name).toEqual(testCase.newItem.name);
        expect(enhancer.repair(testCase.item).durability).toEqual(testCase.newItem.durability);
        expect(enhancer.repair(testCase.item).enhancement).toEqual(testCase.newItem.enhancement);
      });
      break;
    case 'succeed':
      test(testCase.name, () => {
        expect(enhancer.succeed(testCase.item).name).toEqual(testCase.newItem.name);
        expect(enhancer.succeed(testCase.item).durability).toEqual(testCase.newItem.durability);
        expect(enhancer.succeed(testCase.item).enhancement).toEqual(testCase.newItem.enhancement);
      });
      break;
    case 'fail':
      test(testCase.name, () => {
        expect(enhancer.fail(testCase.item).name).toEqual(testCase.newItem.name);
        expect(enhancer.fail(testCase.item).durability).toEqual(testCase.newItem.durability);
        expect(enhancer.fail(testCase.item).enhancement).toEqual(testCase.newItem.enhancement);
      });
      break;
    case 'get':
      test(testCase.name, () => {
        expect(enhancer.get(testCase.item).name).toEqual(testCase.newItem.name);
        expect(enhancer.get(testCase.item).durability).toEqual(testCase.newItem.durability);
        expect(enhancer.get(testCase.item).enhancement).toEqual(testCase.newItem.enhancement);
      });
      break;
  }
}
