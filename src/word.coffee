class Word
  constructor: (s) ->
    unless s.match(/^[\u3041-\u3096\u30A1-\u30F6\u30FB\u30FC]+$/)
      throw Error()
    unless s.match(/^[\u3041-\u3096\u30A1-\u30F6]/)
      throw Error()
    unless s.match(/[\u3041-\u3096\u30A1-\u30F6]$/)
      throw Error()
    @s = s

  toString: ->
    @s

  firstChar: ->
    @_siritoriChar @s[0]

  lastChar: ->
    @_siritoriChar @_lastChar @s

  _lastChar: (s) ->
    [..., c] = s
    if c.match(/[\u30FB\u30FC]/) then @_lastChar(s) else c

  _siritoriChar: (c) ->
    src = 'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ'.split('')
    dst = 'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホ'.split('')
    table = {}
    src.forEach (c, index) ->
      table[c] = dst[index]
    k = if c.match(/[\u3041-\u3096]/)
      String.fromCharCode(c.charCodeAt(0) + 0x0060)
    else
      c
    k.replace /./g, (c) -> if table[c]? then table[c] else c

module.exports.Word = Word
