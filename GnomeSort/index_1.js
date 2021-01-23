function GnomeSort(A)
{
    var n = A.length, i = 1, j = 2;
    while (i < n)
    { if (A[i-1] < A[ i ]){ i = j; j++; }
    else
    { var t = A[i-1]; A[i-1] = A[ i ]; A[ i ] = t;
        i--;
        if (i == 0){ i = j; j++; }
    }
    }
    return A;
}
