package main

func CountPositivesSumNegatives(numbers []int) []int {
  p_counter := 0
  n_sum := 0
  var res []int

  for _, number := range numbers{
    if number > 0 {
      p_counter++
    } else {
      n_sum += number
    }
  }
  res = append(res, p_counter)
  res = append(res, n_sum)

  return res
}
