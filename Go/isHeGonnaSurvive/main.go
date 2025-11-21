package main

func Hero(bullets, dragons int) bool {
  if bullets >= dragons * 2 {
    return true
  }
  return false
}
