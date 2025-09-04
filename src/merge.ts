/**
 * Merge three integer arrays into one sorted ascending array.
 * - collection_1: ascending order
 * - collection_2: descending order
 * - collection_3: ascending order
 * 
 * No built-in sort allowed.
 */

export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    // Step 1: reverse collection_2 to make it ascending
    const asc2 = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
        asc2.push(collection_2[i]);
    }

    // Step 2: merge collection_1 and asc2
    const merged12 = mergeTwoSorted(collection_1, asc2);

    // Step 3: merge result with collection_3
    const merged123 = mergeTwoSorted(merged12, collection_3);

    return merged123;
}

/**
 * Helper: merge two ascending sorted arrays into one ascending sorted array
 */
function mergeTwoSorted(a: number[], b: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }

    // append leftovers
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }

    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    return result;
}
