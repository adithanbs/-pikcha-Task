function solutionTask1(arr) {
  let i = 0;
  const n = arr.length;

  while (i < n) {
    if (
      arr[i] <= 0 ||
      arr[i] > n ||
      i + 1 == arr[i] ||
      arr[arr[i] - 1] == arr[i]
    ) {
      i++;
      continue;
    }

    let temp = arr[arr[i] - 1];
    arr[arr[i] - 1] = arr[i];
    arr[i] = temp;
  }

  for (let j = 0; j < n; ++j) {
    if (arr[j] != j + 1) {
      return j + 1;
    }
  }

  return n + 1;
}
