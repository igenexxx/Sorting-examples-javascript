function InsertionSort(A) // A - массив, который нужно
{ // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n; i++)
    { var v = A[ i ], j = i-1;
        while (j >= 0 && A[j] > v)
        { A[j+1] = A[j]; j--; }
        A[j+1] = v;
    }
    return A; // На выходе сортированный по возрастанию массив A.
}
