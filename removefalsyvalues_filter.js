const arr = [0, 1, false, 2, '', 3, null, undefined, NaN];
const filtered = arr.filter(Boolean);
console.log(filtered); // [1, 2, 3]
