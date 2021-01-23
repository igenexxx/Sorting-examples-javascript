function QuickSort(A) {
  if (A.length === 0) return [];
  let a = [],
    b = [],
    p = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < p) a.push(A[i]);
    else b.push(A[i]);
  }
  return QuickSort(a).concat(p, QuickSort(b));
}

console.log(QuickSort([5, 1, 7, 4, 5, 8, 3, 2, 9, 6]));


