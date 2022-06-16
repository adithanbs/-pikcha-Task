function solutionTask2(arr, targetSum) {
  let found = false;
  let result = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    let l = i + 1;
    let r = arr.length - 1;
    let x = arr[i];
    while (l < r) {
      if (x + arr[l] + arr[r] == targetSum) {
        result.push([x, arr[l], arr[r]]);
        l++;
        r--;
        found = true;
      } else if (x + arr[l] + arr[r] < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return found ? result : [];
}

// Space complexity: O(n), Time Complexity: O(n^2)
