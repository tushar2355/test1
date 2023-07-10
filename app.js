const items=[1,[2,[4,[3]]]];
const _=require('lodash');
const newitems=_.flattenDeep(items);
console.log(newitems);