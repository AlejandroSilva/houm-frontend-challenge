const MAX_PAGES_TO_SHOW = 7 // cannot be 5 or less

const fillArray = (total: number, startOn = 1) =>
  Array(total).fill(null).map((_, i) => i + startOn)

export const INTERVAL_GAP = '...'

// this method aims to generate the sequence used to show on a pagination component
// [1]
// [1 2 3 4 5 . 12]   <  1) start-group
// [1 2 3 4 5 . 12]   <  2) start-group
// [1 2 3 4 5 . 12]   <  3) start-group
// [1 2 3 4 5 . 12]   <  4) start-group (N <=4) (N <= 1+3) - (N <= 1+LEFT)
// [1 . 4 5 6 . 12]   <  5) centered
// [1 . 5 6 7 . 12]   <  6) centered
// [1 . 6 7 8 . 12]   <  7) centered
// [1 . 7 8 9 . 12]   <  8) centered
// [1 . 8 9 10 11 12] <  9) end-group (N >= 9) (N > TOTAL-RIGHT) (N >= 12-3)
// [1 . 8 9 10 11 12] < 10) end-group
// [1 . 8 9 10 11 12] < 11) end-group
// [1 . 8 9 10 11 12] < 12) end-group

export const calculatePagination = (totalPages: number, currentPage: number): Array<number | typeof INTERVAL_GAP> => {
  if (!Number.isInteger(totalPages)) return []
  if (totalPages <= MAX_PAGES_TO_SHOW) return fillArray(totalPages)

  const leftPages = Math.floor(MAX_PAGES_TO_SHOW / 2)
  const rightPages = Math.ceil(MAX_PAGES_TO_SHOW / 2) - 1

  // start-group
  if (currentPage <= 1 + leftPages) {
    return [
      ...fillArray(MAX_PAGES_TO_SHOW - 2),
      INTERVAL_GAP,
      totalPages
    ]
  }
  // end-group
  if (currentPage >= (totalPages - rightPages)) {
    return [
      1,
      INTERVAL_GAP,
      ...fillArray(MAX_PAGES_TO_SHOW - 2, totalPages - (MAX_PAGES_TO_SHOW - 2) + 1)
    ]
  }
  // centered
  return [
    1,
    INTERVAL_GAP,
    ...fillArray(leftPages - 2, currentPage - (leftPages - 2)),
    currentPage,
    ...fillArray(rightPages - 2, currentPage + 1),
    INTERVAL_GAP,
    totalPages
  ]
}
