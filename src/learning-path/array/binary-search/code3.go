package binary_search

func search(nums []int, target int) int {
	for start, end := 0, len(nums)-1; start <= end; {
		middle := (start + end) / 2
		if nums[middle] == target {
			return middle
		}
		if nums[middle] < target {
			start = middle + 1
		}
		if nums[middle] > target {
			end = middle - 1
		}
	}
	return -1
}
