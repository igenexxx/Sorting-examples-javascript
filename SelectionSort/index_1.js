function SelectionSort(A) // A - массив, который нужно
{ // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
    { var min = i;
        for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; }
        var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
    }
    return A; // На выходе сортированный по возрастанию массив A.
}
