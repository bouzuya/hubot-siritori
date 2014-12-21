{Word} = require './word'

class Siritori
  constructor: (@members) ->
    @memberIndex = 0
    @words = []
    @last = null

  isValidWord: (s) ->
    try
      word = new Word(s)
      return true if @words.length is 0
      [..., lastWord] = @words
      return lastWord.lastChar() is word.firstChar()
    catch
      return false

  nextWord: (s) ->
    return if @isOver()
    return unless @isValidWord(s)
    word = new Word(s)

    if word.lastChar() is 'ン'
      @last = s
      return

    if @words.filter((i) -> i.toString() is word.toString()).length > 0
      @last = s
      return

    @words.push word
    @memberIndex = (@memberIndex + 1) % @members.length

  allWords: ->
    words = @words.map((w) -> w.toString())
    if @last? then words.concat([@last]) else words

  lastWord: ->
    [..., last] = @words
    last?.toString() ? ''

  nextMember: ->
    @members[@memberIndex]

  isOver: ->
    @last?

module.exports.Siritori = Siritori
