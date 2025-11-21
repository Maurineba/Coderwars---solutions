package main

func Solution(str, ending string) bool {
  first_letters := len(str)
  last_letters := len(ending)

  if last_letters > first_letters {
    return false
  }

  v := first_letters - last_letters

  for i:=v; i < len(str); i++{
    if str[i] != ending[i-v] {
      return false
    }
  }
  return true
}
