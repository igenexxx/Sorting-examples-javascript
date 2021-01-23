function newGap(gap) // Вспомогательная функция.
{ gap /= 1.3;
    if (gap == 9 || gap == 10) gap = 11;
    if (gap < 1) return 1;
    return gap;
}

function CombSort(A) // Функция сортировки расчёской.
{ var n = A.length, gap = n;
    do { swapped = false;
        gap = newGap(gap);
        for (var i=0; i<n-gap; ++i)
        { if (A[ i ] > A[i+gap])
        { swapped = true;
            var t = A[i+gap]; A[i+gap] = A[ i ]; A[ i ] = t;
        }
        }
    } while (gap > 1 || swapped);
    return A;
}
