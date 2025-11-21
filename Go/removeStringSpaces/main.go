package main

func NoSpace(word string) string {
  size := len(word)
  var noSpaceWord []rune
  for letter := 0; letter < size; letter++ {
    if word[letter] != ' '{
      noSpaceWord = append(noSpaceWord, rune(word[letter]))
    }
  }

  return string(noSpaceWord)
}
