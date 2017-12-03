function mergeSort(array) {
  if (!Array.isArray(array)) throw new Error('Param is not array!', array);

  let length = array.length;

  if (length === 1) return array;

  let part1 = array.slice(0, length / 2);
  let part2 = array.slice(length / 2);

  part1 = mergeSort(part1);
  part2 = mergeSort(part2);

  return merge(part1, part2);
}

function merge(arr1, arr2) {
  let arrays = {
    first: arr1,
    second: arr2,
    merged: []
  };

  while (arrays.first.length && arrays.second.length) {
    let arrName = arrays.first[0] > arrays.second[0] ? 'second' : 'first';

    arrays.merged.push(arrays[arrName][0]);
    arrays[arrName].splice(0, 1);
  }

  return arrays.merged.concat(arrays.first).concat(arrays.second);
}

module.exports = mergeSort;
